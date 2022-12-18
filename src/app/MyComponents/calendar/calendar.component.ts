import { Component, ViewEncapsulation, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';


import { DateFilterFn } from '@angular/material/datepicker';

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
@Input() public NumarCamere: number = 1;
@Input() public NumarCamereOcupate: number = 0;
// @Input() public selectedNumberOfRooms: number = 0;
@Input() public zileOcupate: any[] = [];
@Output() newItemEvent = new EventEmitter<number>();

addNewItem(value: number) {
  this.newItemEvent.emit(value);
}
  today = new Date();
  priceForOneNight = 0;
  priceTotal = 0;
  nightsArray: any[] = [];
  dayStart = this.nightsArray[0];
  // dayEnd = this.nightsArray[this.nightsArray.length];
  dayEnd: any = 0;
  nights = this.nightsArray.length;
  bookedDays: Date[] = []
  overlayNights: any = [];
  showAlerta = false;

  camereLiberePeNoapte = 5;
  NumarCamereLibere = 5 - this.NumarCamereOcupate;


  // Transforms dates Array from (string) to (Date)
  bookedDaysTransform() {
    let numarCamereOcupatePerNoapte;
    let i = 0;
      for (i = 0; i < this.zileOcupate.length; i++) {
        let format = this.zileOcupate[i].ziOcupata.split('/');
        let day = format[0];
        let month = format[1];
        let year = format[2];
        this.bookedDays[i] = new Date(year, month - 1, day);

        numarCamereOcupatePerNoapte = this.zileOcupate[i].numarCamereOcupate;
        // console.log(numarCamereOcupatePerNoapte)
        console.log(this.zileOcupate[i].numarCamereOcupate);
    }
  }

  // Get StartDay & EndDay
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  calculatePrice() {
    this.priceTotal = this.nights * this.PricePerNight * this.NumarCamere;
    return this.NumarCamere
  }

  // Add class RED to booked days
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
      const time = cellDate.getDate();
      const day = cellDate.getDate();
      const month = cellDate.getMonth();
      const year = cellDate.getFullYear();

      // this.camereLiberePeNoapte =  ;

      // Highlight Days.
      let i = 0;
      let redClass = ''
      for (i = 0; i < this.bookedDays.length; i++) {
        if ( time == this.bookedDays[i].getDate() && month == this.bookedDays[i].getMonth() && year == this.bookedDays[i].getFullYear()) {
          redClass = 'example-custom-date-class';
        }
      }
      return redClass;
  };

  filterNights() {
    let array1 = this.nightsArray;
    let array2 = this.bookedDays;

    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i].toString() == array2[j].toString()){
          this.overlayNights.push(array1[i]);
        }
      }
    }
    if (this.overlayNights.length > 0 && this.NumarCamere > this.NumarCamereLibere) {
      this.showAlerta = true;
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
      const dates: Date[] = [];
      const currentDate = startDate;
      while (currentDate < endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      if (includeEndDate) dates.push(endDate);
      this.nightsArray =  dates;
      this.nights = this.nightsArray.length;

      this.dayStart = this.nightsArray[0];
      // this.dayEnd = this.nightsArray[this.nightsArray.length-1];
      this.dayEnd = this.range.value.end;

      this.calculatePrice();
      this.filterNights();
    }
  };

  hideAlerta() {
    this.showAlerta = false;
    this.overlayNights = []
    this.range.value.end = null
    this.range.value.start = null
  }
}
