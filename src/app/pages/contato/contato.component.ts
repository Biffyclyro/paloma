import { Component, OnInit, ViewChild } from '@angular/core';
import {ContactServiceService} from '../../core/services/contact-service.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

    public msg: Mensagem = { name: '', email: '', msg_text: ''};
    public serverOn = false;


  constructor(private contactService: ContactServiceService, private route: Router) { }

  ngOnInit() {
      this.contactService.wakeUpServer().subscribe(() =>{
        console.log('carregou');
        this.serverOn = true;
      });
  }


    send(f: NgForm) {

        this.contactService.wakeUpServer().subscribe(() =>{

            const buttonElement: HTMLElement = document.querySelector('#closeModal') as HTMLElement;
            buttonElement.click();
            window.alert('Mensagem enviada');
            f.resetForm();
            this.msg = { name: '', email: '', msg_text: ''};

        });
    }
      
      /*
    this.contactService.sendMessage(this.msg).subscribe(() => {
        window.alert('Mensagem enviada');

        f.resetForm();
      },
      err => {
        console.log(err.status);
        //window.location.href = `https://http.cat/${err.status}`;
      }
    );
  }

     */

}

export interface Mensagem {
    name: string;
    email: string;
    msg_text: string;
}
