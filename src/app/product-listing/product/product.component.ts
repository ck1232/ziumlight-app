import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() width: Number = 250;
  constructor() { }

  ngOnInit() {
  }
}

export class Product {
    productName: string;
    productCode: string;
    imageUrl: string;
    usualPrice: number;
    discountPrice: number;
    discount: boolean;
    colourList: Array<Colour> = [];
    selectedColour: Colour = null;
}


export class Colour {
    colourName: string;
    imageIconUrl: string;
}
