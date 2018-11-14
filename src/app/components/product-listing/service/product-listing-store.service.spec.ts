import { TestBed, inject } from '@angular/core/testing';

import { ProductListingStoreService } from './product-listing-store.service';

describe('ProductListingStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListingStoreService]
    });
  });

  it('should be created', inject([ProductListingStoreService], (service: ProductListingStoreService) => {
    expect(service).toBeTruthy();
  }));
});
