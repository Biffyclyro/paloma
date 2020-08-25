import { Component, OnInit } from '@angular/core';
import {ContactServiceService} from '../../core/services/contact-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private contatoService: ContactServiceService) { }

  ngOnInit() {
    this.contatoService.wakeUpServer().subscribe(() => {});
  }

}
