import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-turism',
  templateUrl: './turism.component.html',
  styleUrls: ['./turism.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TurismComponent implements OnInit {

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: "start"});
}
  displayAtractii = false;
  showAtractii() {
    this.displayAtractii = true;
  }
  closeAtractii() {
    this.displayAtractii = false;
  }

  constructor() { }

  ngOnInit(): void {
  }


  //today's date
  todayDate:Date = new Date();

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());


  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month. (Zile Ocupote)
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };




}
