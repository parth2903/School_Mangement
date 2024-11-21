import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pracGuard } from './prac.guard';

describe('pracGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pracGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
