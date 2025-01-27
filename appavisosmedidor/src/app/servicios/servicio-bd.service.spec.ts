import { TestBed } from '@angular/core/testing';

import { ServicioBdService } from './servicio-bd.service';

describe('ServicioBdService', () => {
  let service: ServicioBdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioBdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
