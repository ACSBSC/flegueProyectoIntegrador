import { TestBed } from '@angular/core/testing';

import { AbuelitoGuard } from './abuelito.guard';

describe('AbuelitoGuard', () => {
  let guard: AbuelitoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AbuelitoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
