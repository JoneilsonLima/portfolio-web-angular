/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicosListaService } from './servicos-lista.service';

describe('Service: ServicosLista', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicosListaService]
    });
  });

  it('should ...', inject([ServicosListaService], (service: ServicosListaService) => {
    expect(service).toBeTruthy();
  }));
});
