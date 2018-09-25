import { Component, OnInit, Input } from '@angular/core';
import { Breadcrumb } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-breadcrumb-node',
  templateUrl: './breadcrumb-node.component.html',
  styleUrls: ['./breadcrumb-node.component.css']
})
export class BreadcrumbNodeComponent implements OnInit {
  @Input() breadcrumb: Breadcrumb;
  constructor() { }

  ngOnInit() {
  }

}
