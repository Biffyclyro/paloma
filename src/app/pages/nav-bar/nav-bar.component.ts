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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
