import { Injectable } from '@angular/core';
import {AbstractApiService} from './abstract-api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PressService extends AbstractApiService{
  readonly API_URL = 'https://api.imgur.com/3/album/4LgkZsV';
  readonly clientID = 'dc8263f6330a832';


 public getPress(): Observable<Response> {
  return this.httpC.get<Response>(this.API_URL, {headers:{'Authorization': `Client-ID ${this.clientID}`}});
 }

}

export interface Response {
  data: Dado;
}

export interface Dado {
  images: Img[];
}

export interface Img{
  link: string;
  description: string;
}

