import { TestBed } from '@angular/core/testing';

import { CuidadorGuard } from './cuidador.guard';

describe('CuidadorGuard', () => {
  let guard: CuidadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CuidadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
