import { Component, OnInit } from '@angular/core';
import { ServiceCardComponent } from './service-card/service-card.component';

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

  constructor() { }

  ngOnInit() {
  }

}
