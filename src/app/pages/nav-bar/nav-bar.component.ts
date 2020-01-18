import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  links: {title: string, route: string} [] = [
    {

      title: 'Página inicial',
      route: 'home'
    },
    {
      title: 'Bio',
      route: 'bio'
    },
    {
      title: 'Vídeos',
      route: 'videos'
    },
    {
      title: 'Contato',
      route: 'dahpodhsaopd',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
