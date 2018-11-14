import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Product, Colour } from '../product/product.component';
import { ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime } from 'rxjs/operators';
import { SortElement } from '../../enum/sort-element.enum';
import { ProductListingStoreService } from '../service/product-listing-store.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit, OnDestroy {
  static readonly maxBoxSize: number = 250;
  productList: Array<Product> = [];
  @ViewChild('productListingBox') productListingBox;
  timeOutId: any;
  productWidthSize: Number = 250;
  priceFilterArray: Array<number> = [];
  shippingFilter = 0;
  pageNum = 1;
  sort: SortElement = SortElement.Featured;
  priceFilterSubscription: Subscription;
  shippingFilterSubscription: Subscription;
  paginationSubscription: Subscription;
  sortSubscription: Subscription;

  constructor(private _productListingStoreService: ProductListingStoreService) {
      fromEvent(window, 'resize')
      .pipe(debounceTime(500))
      .subscribe((event) => {
          this.adjustProductWidth();
      });
      this.priceFilterSubscription =
      this._productListingStoreService.priceChange$.subscribe(priceFilterArray => this.priceFilterHandler(priceFilterArray));
      this.shippingFilterSubscription =
      this._productListingStoreService.shippingChange$.subscribe(shippingFilter => this.shippingFilterHandler(shippingFilter));
      this.paginationSubscription = this._productListingStoreService.pignationChange$.subscribe(pageNum => this.paginationHandler(pageNum));
      this.sortSubscription = this._productListingStoreService.sortChange$.subscribe(sort => this.sortingHandler(sort));
  }

  priceFilterHandler(priceFilterArray: Array<number>) {
      console.log(priceFilterArray);
      this.priceFilterArray = priceFilterArray;
  }

  shippingFilterHandler(shippingFilter: number) {
      console.log(shippingFilter);
      this.shippingFilter = shippingFilter;
  }

  paginationHandler(pageNum: number) {
      console.log(pageNum);
      this.pageNum = pageNum;
  }

  sortingHandler(sortElement: SortElement) {
      console.log(sortElement);
      this.sort = sortElement;
  }

  ngOnInit() {
      const c1 = new Colour();
      c1.colourName = 'Green';
      c1.imageIconUrl = 'http://via.placeholder.com/25x25';
      const c2 = new Colour();
      c2.colourName = 'Red';
      c2.imageIconUrl = 'http://via.placeholder.com/25x25';
      const c3 = new Colour();
      c3.colourName = 'Blue';
      c3.imageIconUrl = 'http://via.placeholder.com/25x25';
      const p1 = new Product();
      p1.productName = 'Cleo Floor Lamp';
      p1.productCode = 'cleo';
      p1.usualPrice = 139;
      p1.imageUrl = 'http://via.placeholder.com/250x150';
      p1.discount = true;
      p1.discountPrice = 120;
      p1.colourList.push(c1, c2, c3);
      this.productList.push(p1);
      const p2 = new Product();
      p2.productName = 'Cleo Floor Lamp1';
      p2.productCode = 'cleo';
      p2.usualPrice = 139;
      p2.imageUrl = 'http://via.placeholder.com/250x150';
      p2.discount = true;
      p2.discountPrice = 120;
      p2.colourList.push(c1, c2, c3);
      this.productList.push(p2);
      for ( let i = 0; i < 10; i ++ ) {
      const p3 = new Product();
      p3.productName = 'Cleo Floor Lamp1';
      p3.productCode = 'cleo';
      p3.usualPrice = 139;
      p3.imageUrl = 'http://via.placeholder.com/250x150';
      p3.discount = true;
      p3.discountPrice = 120;
      p3.colourList.push(c1, c2, c3);
      this.productList.push(p3);
      }
      console.log(p1.colourList);
  }

  ngOnDestroy() {
      this.priceFilterSubscription.unsubscribe();
      this.shippingFilterSubscription.unsubscribe();
      this.paginationSubscription.unsubscribe();
      this.sortSubscription.unsubscribe();
  }

  adjustProductWidth() {
    const boxSize: number = this.productListingBox.nativeElement.offsetWidth;
    let numOfBoxes: number = Math.floor(boxSize / ProductListingComponent.maxBoxSize);
    const spaceLeft: number = boxSize % ProductListingComponent.maxBoxSize;
    const percentageSpaceLeft = spaceLeft / ProductListingComponent.maxBoxSize;
    const canSqueeze: boolean = percentageSpaceLeft > 0.75;
      if (canSqueeze) {
          numOfBoxes = numOfBoxes + 1;
      }
      this.productWidthSize = (boxSize / numOfBoxes) - 15;
  }
}
