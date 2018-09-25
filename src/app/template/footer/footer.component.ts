import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialList: Array<SocialIcon> = [];
  constructor() { }

  ngOnInit() {
      this.socialList.push(new SocialIcon('facebook', 'fab fa-facebook-f', 'https://facebook.com/colorlib'));
      this.socialList.push(new SocialIcon('Twitter', 'fab fa-twitter', 'https://facebook.com/colorlib'));
      this.socialList.push(new SocialIcon('Instagram', 'fab fa-instagram', 'https://facebook.com/colorlib'));
      this.socialList.push(new SocialIcon('LinkedIn', 'fab fa-linkedin', 'https://facebook.com/colorlib'));
      this.socialList.push(new SocialIcon('Youtube', 'fab fa-youtube', 'https://facebook.com/colorlib'));
  }
}

export class SocialIcon {
    constructor(public text: string, public icon: string, public url: string) {}
}
