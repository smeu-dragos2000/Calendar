import { TestBed } from '@angular/core/testing';

import { BusyDayService } from './busy-day.service';

describe('BusyDayService', () => {
  let service: BusyDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusyDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
