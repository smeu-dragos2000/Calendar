import { Reservation } from './../../MyClass/Reservation';
import { BusyDayService } from './../../MyService/busy-day.service';
import { Component, ViewEncapsulation, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

@Input() public PricePerNight: number = 0;
@Input() public RoomName: string = "";
@Input() public TotalRooms: number = 1;
@Input() public selectedNumberOfRooms: number = 1;
@Input() public noBusyRooms: number = 0;
@Input() public zileOcupate: any[] = [];
@Output() newItemEvent = new EventEmitter<number>();

constructor(private busyDayService: BusyDayService){}

addNewItem(value: number) {
  this.newItemEvent.emit(value);
}

  showRezervaForm: boolean = false;

  reservation = new Reservation();
  today = new Date();
  priceForOneNight: number = 0;
  priceTotal: number = 0;
  selectedNightsArray: any[] = [];
  selectedNightsArrayString: any[] = [];
  dayStart = this.selectedNightsArray[0];
  dayEnd: any = 0;
  nights = this.selectedNightsArray.length;
  bookedDays: any[] = [];
  overlayNights: any = [];
  showAlerta: boolean = false;
  mesajAlerta: string = '';
  noBusyRoomsPerNight: number[] = []
  cellDate: any;
  view: any;

  // Transforms dates Array from (string) to (Date)
  bookedDaysTransform() {
    let i = 0;
      for (i = 0; i < this.zileOcupate.length; i++) {
        let format = this.zileOcupate[i].busyDay.split('/');
        let day = format[0];
        let month = format[1];
        let year = format[2];

        this.bookedDays.push({
          bookedDay: new Date(year, month - 1, day),
          numberOfRooms: this.zileOcupate[i].noBusyRooms
        })
    }
  }

  // Get StartDay & EndDay
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  calculatePrice() {
    this.priceTotal = this.nights * this.PricePerNight * this.selectedNumberOfRooms;
    return this.selectedNumberOfRooms
  }

  // Add class RED to booked days
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    this.cellDate = cellDate;
    this.view = view;
    // Only highligh dates inside the month view.
      const time = cellDate.getDate();
      const month = cellDate.getMonth();
      const year = cellDate.getFullYear();
      // Highlight Days.
        let i = 0;
        let redClass = ''
        for (i = 0; i < this.bookedDays.length; i++) {
          if ( time == this.bookedDays[i].bookedDay.getDate() && month == this.bookedDays[i].bookedDay.getMonth() && year == this.bookedDays[i].bookedDay.getFullYear() && cellDate >= this.today && this.selectedNumberOfRooms > (this.TotalRooms - this.bookedDays[i].numberOfRooms)) {
            redClass = 'example-custom-date-class';
          }
        }
        return redClass;
  };

  filterNights() {
    let array1 = this.selectedNightsArray;
    let array2 = this.bookedDays;
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i].toString() == array2[j].bookedDay.toString() && this.selectedNumberOfRooms > (this.TotalRooms - array2[j].numberOfRooms)){
          this.overlayNights.push(array1[i]);
        }
      }
    }
    if ( this.overlayNights.length > 0) {
      this.showAlerta = true;
      this.mesajAlerta = "Ați selectat zile care sunt deja ocupate";
    }
    else {
      this.showAlerta = false;
    }
  }

  ngOnInit() {
    this.bookedDaysTransform()
  }



  //  calculate Nights & Create nights array
  getDatesBetween (startDate?: any, endDate?: any, includeEndDate?: boolean) {
    startDate = this.range.value.start;
    endDate = this.range.value.end;
    if (startDate && endDate && startDate != endDate) {


      this.busyDayService.showRezervaForm = true;


      const dates: Date[] = [];
      const currentDate = startDate;
      // Increment day from start day to end day
      while (currentDate < endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      if (includeEndDate) dates.push(endDate);
      this.selectedNightsArray =  dates;
      this.nights = this.selectedNightsArray.length;
      this.dayStart = this.selectedNightsArray[0].getDate() + "." + (this.selectedNightsArray[0].getMonth() + 1) + "." + this.selectedNightsArray[0].getFullYear();
      if (this.range.value.end) {
        this.dayEnd = this.range.value.end?.getDate() + "." + (this.range.value.end?.getMonth() + 1) + "." + this.range.value.end?.getFullYear();
      }

      this.calculatePrice();
      this.filterNights();
      this.dateClass (this.cellDate, this.view);
      this.saveInfoAboutReservationInDb()
      this.changeDataFormatForDB()
    }
  };

  hideAlerta() {
    this.showAlerta = false;
    this.overlayNights = []
    this.range.value.end = null
    this.range.value.start = null
  }
  saveInfoAboutReservationInDb(){
    this.reservation.checkIn = this.dayStart;
    this.reservation.checkOut = this.dayEnd;
    // const checkInDay = this.range.value.start.getTime()

    this.reservation.noNights = this.nights.toString();
    this.reservation.noRooms = this.TotalRooms.toString();
    this.reservation.totalPrice = this.priceTotal.toString();
    if(this.RoomName.toLowerCase() == "apartament 4 camere") {
      this.reservation.typeRoom  = "family-ana"
    }
    else if(this.RoomName.toLowerCase() == "cameră de familie") {
      this.reservation.typeRoom  = "family-han"

    }
    else if(this.RoomName.toLowerCase() == "cameră single") {
      this.reservation.typeRoom  = "single-han"
    }
    else if(this.RoomName.toLowerCase() == "cameră dublă") {
      this.reservation.typeRoom  = "double-han"
    }

    else{
      console.log("ceva nu e bine")
    }

    // Conditionari Selectare tip camera
    if(this.RoomName.toLowerCase() == "apartament 4 camere") {
      //turism-ana
      this.busyDayService.selectedNightsArrayString = this.selectedNightsArrayString;
      this.busyDayService.reservationAna.reservation = this.reservation;
      console.log("apartament 4 camere")
    }
    //turism-han
    else {
      if (this.RoomName.toLowerCase() == "cameră de familie") {
        this.busyDayService.selectedNightsArrayString = this.selectedNightsArrayString;
        this.busyDayService.reservationHan.reservationHanFamily = this.reservation;
        this.busyDayService.selectedNumberOfRooms = this.selectedNumberOfRooms;
      }
      else if (this.RoomName.toLowerCase() == "cameră single") {
        this.busyDayService.selectedNightsArraySingleString = this.selectedNightsArrayString;
        this.busyDayService.reservationHan.reservationHanSingle = this.reservation;
        this.busyDayService.selectedNumberOfRooms = this.selectedNumberOfRooms;
      }
      else if (this.RoomName.toLowerCase() == "cameră dublă") {
        this.busyDayService.selectedNightsArrayDoubleString = this.selectedNightsArrayString;
        this.busyDayService.reservationHan.reservationHanDouble = this.reservation;
        this.busyDayService.selectedNumberOfRooms = this.selectedNumberOfRooms;
      }
    }



  }

  changeDataFormatForDB(){
    for (let i=0; i<this.selectedNightsArray.length; i++) {
      const time = this.selectedNightsArray[i].getDate();
      const month = this.selectedNightsArray[i].getMonth() + 1;
      const year = this.selectedNightsArray[i].getFullYear();
      this.selectedNightsArrayString[i] = time + "/" + month + "/" + year;
    }
  }
}
