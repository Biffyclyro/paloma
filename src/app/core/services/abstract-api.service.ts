import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbstractApiService {
  readonly API: string = environment.API_URL;
  constructor(protected httpC: HttpClient) {
    this.httpC = httpC;
  }
}
