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
@Input() public zileOcupate: any[] = [];
@Output() newItemEvent = new EventEmitter<number>();

addNewItem(value: number) {
  this.newItemEvent.emit(value);
}

  today = new Date();
  priceForOneNight = 1000;
  priceTotal = 0;
  nightsArray: any[] = [];
  nights = this.nightsArray.length;
  bookedDays: Date[] = []

  // Transforms dates Array from (string) to (Date)
  bookedDaysTransform() {
    let i = 0;
      for (i = 0; i < this.zileOcupate.length; i++) {
        let format = this.zileOcupate[i].split('/');
        let day = format[0];
        let month = format[1];
        let year = format[2];
        this.bookedDays[i] = new Date(year, month - 1, day);
    }
  }

  // Get StartDay & EndDay
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  // calculateNights() {
  //   // calculate Nights
  //   const dayStart = this.range.value.start;
  //   const dayEnd = this.range.value.end;
  //   if (dayStart && dayEnd && dayStart != dayEnd) {
  //   let Time = dayEnd.getTime() - dayStart.getTime();
  //   this.nights = Time / (1000 * 3600 * 24);
  //   }
  // }

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

      this.calculatePrice();
    }
  };

}
