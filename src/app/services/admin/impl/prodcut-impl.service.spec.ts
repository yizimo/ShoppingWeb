import { TestBed } from '@angular/core/testing';

import { ProdcutImplService } from './prodcut-impl.service';

describe('ProdcutImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdcutImplService = TestBed.get(ProdcutImplService);
    expect(service).toBeTruthy();
  });
});
