import { TestBed } from '@angular/core/testing';

import { GrupoAlimentoService } from './grupo-alimento.service';

describe('GrupoAlimentoService', () => {
  let service: GrupoAlimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoAlimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
