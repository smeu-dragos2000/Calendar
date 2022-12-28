import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd  } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  displayTEL = false;

  ngOnInit(): void {
    innerWidth = window.innerWidth;
    if (innerWidth < 800) {
      this.displayTEL = true;
    }
    else { this.displayTEL = false; }
  }

  // Condition for Contact Ginivisa/BrainHub
  myRoute: any;
  constructor(router: Router, public location: Location ){
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.myRoute = this.location.path().toString();
        // console.log(this.myRoute);
      }
    });
  }

}
