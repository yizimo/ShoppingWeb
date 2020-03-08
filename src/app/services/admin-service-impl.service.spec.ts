import { TestBed } from '@angular/core/testing';

import { AdminServiceImplService } from './admin-service-impl.service';

describe('AdminServiceImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminServiceImplService = TestBed.get(AdminServiceImplService);
    expect(service).toBeTruthy();
  });
});
