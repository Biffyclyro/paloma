import { Injectable } from '@angular/core';
import {AbstractApiService} from './abstract-api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService extends AbstractApiService{
  URL_API = 'teste';

  public sendMessage() {
    return this.httpC.post(this.URL_API, '');
  }
}
