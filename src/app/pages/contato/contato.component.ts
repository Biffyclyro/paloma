import { Component, OnInit } from '@angular/core';
import {ContactServiceService} from '../../core/services/contact-service.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contactService: ContactServiceService, private route: Router) { }

  ngOnInit() {
  }

  send() {
    this.contactService.sendMessage().subscribe(() => {
      },
      err => {
        console.log(err.status);
        window.location.href = `https://http.cat/${err.status}`;
      }
    );
  }

}
