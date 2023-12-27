import { Component, OnInit } from '@angular/core';
import { ServiceCardComponent } from './service-card/service-card.component';
import { MeuServico } from '../../shared/models/card-servico.model';
import { ServicosListaService } from '../../services/servicos-lista.service';

@Component({
  selector: 'app-my-services',
  standalone: true,
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss',
  imports: [
    ServiceCardComponent
  ]
})
export class MyServicesComponent implements OnInit {
  public servicosLista: MeuServico[] = []

  constructor(private service: ServicosListaService) { }

  ngOnInit() {
    this.buscarServicos()
  }

  buscarServicos(): void {
    this.service.getListaServico().subscribe({
      next: (resp) => {
        this.servicosLista = resp;
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

}
