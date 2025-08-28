import { TestBed } from '@angular/core/testing';

import { Medicalservice } from './medicalservice';

describe('Medicalservice', () => {
  let service: Medicalservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Medicalservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
