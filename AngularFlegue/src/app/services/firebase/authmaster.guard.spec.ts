import { TestBed } from '@angular/core/testing';

import { AuthmasterGuard } from './authmaster.guard';

describe('AuthmasterGuard', () => {
  let guard: AuthmasterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthmasterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
