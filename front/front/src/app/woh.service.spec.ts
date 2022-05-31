import { TestBed } from '@angular/core/testing';

import { WohService } from './woh.service';

describe('WohService', () => {
  let service: WohService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WohService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
