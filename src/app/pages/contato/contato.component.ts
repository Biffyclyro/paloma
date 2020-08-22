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

  public msg: Mensagem = { name: '', email: '', msg_text: ''} 
  constructor(private contactService: ContactServiceService, private route: Router) { }

  ngOnInit() {
      () => this.contactService.wakeUpServer();
  }


  send() {
      console.log(this.msg);
    this.contactService.sendMessage(this.msg).subscribe(() => {
      },
      err => {
        console.log(err.status);
        //window.location.href = `https://http.cat/${err.status}`;
      }
    );
  }

}

export interface Mensagem {
    name: string;
    email: string;
    msg_text: string;
}
