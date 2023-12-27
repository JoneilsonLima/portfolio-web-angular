import { Injectable } from '@angular/core';
import { MeuServico } from '../shared/models/card-servico.model';
import { SERVICOS } from '../mocks/servicos-lista';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosListaService {
  private listaServicos: MeuServico[] = SERVICOS;

  constructor() { }

  getListaServico(): Observable<MeuServico[]> {
    return of(this.listaServicos);
  }
}
