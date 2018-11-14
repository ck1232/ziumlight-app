import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
//import { NguCarouselConfig } from '../carousel';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from './slide-animation';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
  imgags = [
    'assets/bg.jpg',
    'assets/car.png',
    'assets/canberra.jpg',
    'assets/holi.jpg'
  ];
  
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 3,
    speed: 350,
    interval: {
      timing: 3000,
      initialDelay: 1000
    },
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    loop: true,
    touch: true,
    animation: 'lazy',
    easing: 'cubic-bezier(.17,.67,.83,.67)'
  };

  

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    
  }


  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
