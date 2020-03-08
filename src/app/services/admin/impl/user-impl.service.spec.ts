import { TestBed } from '@angular/core/testing';

import { UserImplService } from './user-impl.service';

describe('UserImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserImplService = TestBed.get(UserImplService);
    expect(service).toBeTruthy();
  });
});
