import { Component, OnInit } from '@angular/core';
import { ProductListingStoreService } from '../service/product-listing-store.service';
import { SortElement } from 'src/app/enum/sort-element.enum';

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
