import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumb: Breadcrumb;
  constructor() { }

  ngOnInit() {
      this.breadcrumb = new Breadcrumb();
      this.breadcrumb.text = 'home';
      this.breadcrumb.url = '/home';
      const childCrumb = new Breadcrumb();
      childCrumb.text = 'Product';
      childCrumb.url = '/product';
      this.breadcrumb.next = childCrumb;
  }
}

export class Breadcrumb {
    text: string;
    url: string;
    next: Breadcrumb = null;
    constructor() {}
}
