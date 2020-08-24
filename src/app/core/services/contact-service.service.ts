import { Injectable } from '@angular/core';
import {AbstractApiService} from './abstract-api.service';
import {Observable} from 'rxjs';
import {Mensagem} from 'src/app/pages/contato/contato.component';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService extends AbstractApiService{
  URL_API = 'https://paloma-contact.herokuapp.com';

  public wakeUpServer(): void {
      this.httpC.get(this.URL_API);
  }

  public sendMessage(msg: Mensagem): Observable<Mensagem> {
    return this.httpC.post<Mensagem>(this.URL_API, msg);
  }


}
