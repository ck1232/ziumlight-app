import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor() { }
  mobileView = false;
  navOpen = false;
  stickyMenu = false;
  ngOnInit() {
      window.addEventListener('scroll', this.scroll, true); // third parameter
  }
  ngOnDestroy() {
      window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (): void => {
      if (window.pageYOffset >= 1) {
          this.stickyMenu = true;
      } else {
          this.stickyMenu = false;
      }
  }
  // Mobile Menu
  mobileToggle() {
      this.mobileView = true;
      this.navOpen = !this.navOpen;
  }

}
