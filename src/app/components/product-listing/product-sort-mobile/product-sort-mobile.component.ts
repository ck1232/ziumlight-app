import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductListingStoreService } from '../service/product-listing-store.service';
import { SortElement } from 'src/app/enum/sort-element.enum';

@Component({
  selector: 'app-product-sort-mobile',
  templateUrl: './product-sort-mobile.component.html',
  styleUrls: ['./product-sort-mobile.component.css']
})
export class ProductSortMobileComponent implements OnInit, OnDestroy {
  sortByControl: FormControl = new FormControl('Featured');
  sortSubscription: Subscription;
  constructor(private fb: FormBuilder, private _productListingStoreService: ProductListingStoreService) { }

  ngOnInit() {
      this.onChanges();
  }

  ngOnDestroy() {
    this.sortSubscription.unsubscribe();
  }

  onChanges() {
      this.sortSubscription = this.sortByControl.valueChanges
      .pipe(debounceTime(50))
      .subscribe(val => {
          const selectedSort = <SortElement> val;
          this._productListingStoreService.changeSorting(selectedSort);
      });
  }

  sortElements(): Array<string> {
      return Object.keys(SortElement);
  }
}
