import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbstractApiService {

  constructor(protected httpC: HttpClient) {
    this.httpC = httpC;
  }
}
