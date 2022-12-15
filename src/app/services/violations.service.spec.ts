import { TestBed } from '@angular/core/testing';

import { ViolationsService } from './violations.service';

describe('ViolationsService', () => {
  let service: ViolationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViolationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
