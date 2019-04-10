import { TestBed } from '@angular/core/testing';

import { Product2WishlistService } from './product2-wishlist.service';

describe('Product2WishlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Product2WishlistService = TestBed.get(Product2WishlistService);
    expect(service).toBeTruthy();
  });
});
