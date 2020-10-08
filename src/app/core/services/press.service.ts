import { Injectable } from '@angular/core';
import {AbstractApiService} from './abstract-api.service';
import {Observable} from 'rxjs';
import {DtoData} from 'src/app/app.module';


@Injectable({
  providedIn: 'root'
})
export class PressService extends AbstractApiService{
  readonly API_URL = 'https://api.imgur.com/3/album/CYxmmC0';
  readonly clientID = 'dc8263f6330a832';


 public getPress(): Observable<DtoData<Dado>> {
  return this.httpC.get<DtoData<Dado>>(this.API_URL, {headers:{'Authorization': `Client-ID ${this.clientID}`}});
 }

}
export interface Dado {
  images: Img[];
}

export interface Img{
  link: string;
  description: string;
}

