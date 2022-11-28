import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';


import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {

@Input() public PricePerNight: number = 0;
@Input() public NumarCamere: number = 1;
@Input() public zileOcupate: any[] = [];
@Output() newItemEvent = new EventEmitter<number>();

addNewItem(value: number) {
  this.newItemEvent.emit(value);
}

  today = new Date();
  priceForOneNight = 1000;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  calculateNights() {
    const date1 = this.range.value.start;
    const date2 = this.range.value.end;
    if (date1 && date2 && date1 != date2) {
    let Time = date2.getTime() - date1.getTime();
    let Days: number = Time / (1000 * 3600 * 24);
    return  Days
    }
    return  0
  }

  calculatePrice() {
    let priceTotal = this.calculateNights() * this.PricePerNight * this.NumarCamere;
    console.log(this.day1);
    return priceTotal
  }

  // My Booked Days
  bookedDays: any[] = []
  getBookedDays() {

  }


  // Booked Days
  day1: any = new Date("11/20/2022").getDate()
  day2: any = new Date("11/24/2022").getDate()

//  Red Class to specified dates
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
      const date = cellDate.getDate();
      // Highlight day1 and day2.
      return date === this.day1 || date === this.day2 ? 'example-custom-date-class' : '';
  };

  ngOnInit() {

  }

  holidayList = [
    new Date("11/25/2022").getTime(),
    new Date("11/22/2022").getTime()
 ]

 myFilter = (d: Date) => {
  const time=d.getTime()
  return !this.holidayList.find(x=>x==time)
}


// rangeFilter: DateFilterFn<Date> = (date: Date | null): boolean => {
//   const dateNumber = date?.getDate();
//   const dateMonth = date?.getMonth();
//   const dateYear = date?.getFullYear();
//   const actualMonth = dateMonth ? dateMonth + 1 : dateMonth;
//   const actualDate = `${dateYear}-${actualMonth}-${dateNumber}`;
//   const formattedDate = format(new Date(actualDate), 'yyyy-MM-dd');
//   const checkValid = this.availableDates.find( (dateItem) => dateItem.date == formattedDate );
//   if (!checkValid) {
//     return false;
//   }
//   return true;
// };

}
