import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  links: {title: string, route: string} [] = [
    {

      title: 'Home',
      route: 'home'
    },
    {
      title: 'Bio',
      route: 'bio'
    },
    {
      title: 'Videos',
      route: 'videos'
    },
    /*
    {
      title: 'Scores',
      route: 'scores'
    }, */
    {
      title: 'Press',
      route: 'press'
    },
    {
      title: 'Contact',
      route: 'contato',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
