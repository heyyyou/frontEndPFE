import { TestBed } from '@angular/core/testing';

import { ConsultationMedService } from './consultation-med.service';

describe('ConsultationMedService', () => {
  let service: ConsultationMedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationMedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
