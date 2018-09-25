import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SortElement } from '../../enum/sort-element.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductListingStoreService {
  private _priceFilterSource = new BehaviorSubject<Array<number>>([]);
  private _shippingFilterSource = new BehaviorSubject<number>(0);
  private _paginationSource = new BehaviorSubject<number>(0);
  private _sortSource = new BehaviorSubject<SortElement>(SortElement.Featured);
  priceChange$ = this._priceFilterSource.asObservable();
  shippingChange$ = this._shippingFilterSource.asObservable();
  pignationChange$ = this._paginationSource.asObservable();
  sortChange$ = this._sortSource.asObservable();
  constructor() { }
  changePrice(priceFilterArray: Array<number>) {
      this._priceFilterSource.next(priceFilterArray);
  }
  changeShipping(shippingFilter: number) {
      this._shippingFilterSource.next(shippingFilter);
  }
  changePagination(pageNum: number) {
      this._paginationSource.next(pageNum);
  }
  changeSorting(selectedSort: SortElement) {
      this._sortSource.next(selectedSort);
  }
}
