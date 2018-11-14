import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductListingStoreService } from '../service/product-listing-store.service';

@Component({
  selector: 'app-shipping-filter',
  templateUrl: './shipping-filter.component.html',
  styleUrls: ['./shipping-filter.component.css']
})
export class ShippingFilterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  shippingSubscription: Subscription;
  shippingRangeConfig: any = {
    behaviour: 'drag',
    connect: 'true',
    keyboard: true,
    step: 5,
    range: {
        min: 0,
        max: 60,
    },
    pips: {
        mode: 'range',
        density: 100,
        stepped: true
    }
 };
  constructor(private fb: FormBuilder, private _productListingStoreService: ProductListingStoreService) { }

  ngOnInit() {
      this.form = this.fb.group({ 'single': [ 60 ] });
      this.onChanges();
  }

  ngOnDestroy() {
      this.shippingSubscription.unsubscribe();
  }

  onChanges() {
      this.shippingSubscription = this.form.valueChanges
      .pipe(debounceTime(200))
      .subscribe(val => {
          this._productListingStoreService.changeShipping(val.single);
      });
  }
}
