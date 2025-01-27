import { TestBed } from '@angular/core/testing';

import { ServicioListaService } from './servicio-lista.service';

describe('ServicioListaService', () => {
  let service: ServicioListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
