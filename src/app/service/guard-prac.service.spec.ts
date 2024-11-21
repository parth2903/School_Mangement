import { TestBed } from '@angular/core/testing';

import { GuardPracService } from './guard-prac.service';

describe('GuardPracService', () => {
  let service: GuardPracService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardPracService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
