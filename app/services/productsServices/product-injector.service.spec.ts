import { TestBed } from '@angular/core/testing';

import { ProductInjectorService } from './product-injector.service';

describe('ProductInjectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductInjectorService = TestBed.get(ProductInjectorService);
    expect(service).toBeTruthy();
  });
});
