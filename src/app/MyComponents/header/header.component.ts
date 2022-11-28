import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isScrolled = true;
  innerWidth = 0;
  displayLogo = true;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  // Event Listener for window width(display)
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // this.innerWidth = window.innerWidth;
  }

  // Event Listener for window Scroll on Y
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const verticalOffset = window.pageYOffset;
    const widht = this.innerWidth;

    // Logic for display/hide logo on small screen
    if (verticalOffset > 50 && widht < 800) {
      this.displayLogo = false;
    }

    else {
      this.displayLogo = true;
    }

  }

}
