import { TestBed } from '@angular/core/testing';

import { UsuarioServiceTestService } from './usuario-service-test.service';

describe('UsuarioServiceTestService', () => {
  let service: UsuarioServiceTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioServiceTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
