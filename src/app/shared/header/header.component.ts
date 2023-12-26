import { Component, OnInit } from '@angular/core';
import { NavegacaoLink } from '../models/navegacao-link.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule
  ]
})
export class HeaderComponent implements OnInit {
  public listaNavegacao: NavegacaoLink[] = [
    {chaveId: '#home', nomeLink: 'Home'},
    {chaveId: '#sobre', nomeLink: 'Sobre mim'},
    {chaveId: '#projetos', nomeLink: 'Projetos'},
    {chaveId: '#contato', nomeLink: 'Contato'},
  ];

  public mostrarMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
