import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
   @ViewChild('header') header!: ElementRef;
   public isScrolled = false;

  public listaNavegacao: NavegacaoLink[] = [
    {chaveId: '#home', nomeLink: 'Home'},
    {chaveId: '#about', nomeLink: 'Sobre mim'},
    {chaveId: '#projects', nomeLink: 'Projetos'},
    {chaveId: '#contact', nomeLink: 'Contato'},
  ];

  public mostrarMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
