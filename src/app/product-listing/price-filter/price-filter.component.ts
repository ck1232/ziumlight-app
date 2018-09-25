import { Component, OnInit, OnDestroy } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductListingStoreService } from '../service/product-listing-store.service';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  @Input() minPrice = 0;
  @Input() maxPrice = 100;
  priceRangeConfig: any = {
    behaviour: 'drag',
    connect: 'true',
    keyboard: true,
    margin: 20,
    step: 10,
    range: {
        min: 10,
        max: 100,
    }
 };

  priceFilterSubscription: Subscription;
  constructor(private fb: FormBuilder, private _productListingStoreService: ProductListingStoreService) {}

  ngOnInit() {
      this.form = this.fb.group({ 'range': [ [ this.minPrice, this.maxPrice ] ] });
      this.onChanges();
  }

  ngOnDestroy() {
      this.priceFilterSubscription.unsubscribe();
  }

  onChanges() {
      this.priceFilterSubscription = this.form.valueChanges
      .pipe(debounceTime(200))
      .subscribe(val => {
          this._productListingStoreService.changePrice(val.range);
      });
  }
}
