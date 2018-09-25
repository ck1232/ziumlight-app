import { Component, OnInit } from '@angular/core';
import { SortElement } from '../../enum/sort-element.enum';
import { ProductListingStoreService } from '../service/product-listing-store.service';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css']
})
export class ProductSortComponent implements OnInit {
  constructor(private _productListingStoreService: ProductListingStoreService) { }

  ngOnInit() {
  }

  onSortSelected(sortElementString: string) {
      const selectedSort = <SortElement> sortElementString;
      this._productListingStoreService.changeSorting(selectedSort);
  }

  sortElements(): Array<string> {
      return Object.keys(SortElement);
  }

}
