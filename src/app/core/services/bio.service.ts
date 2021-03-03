import { Injectable } from '@angular/core';
import {AbstractApiService} from './abstract-api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BioService extends AbstractApiService{

  public getBio(): Observable<any>{
    return this.httpC.get(`${this.API}/bio`);
  }

}
