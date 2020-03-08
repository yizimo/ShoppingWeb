import { TestBed } from '@angular/core/testing';

import { OrderImplService } from './order-impl.service';

describe('OrderImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderImplService = TestBed.get(OrderImplService);
    expect(service).toBeTruthy();
  });
});
