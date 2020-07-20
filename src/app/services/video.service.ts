import { Injectable } from '@angular/core';
import {AbstractApiService} from './abstract-api.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService extends AbstractApiService{
  protected readonly playListId = 'PLcw6bO94_u6OZPTGEhH42qNW-l5cLzUjP';
  protected readonly apiKey = 'AIzaSyAi9QFDAcF9nSlkkHckqxYLdlpJ5W_HozY';
  protected readonly youYubeApi: string = environment.youTubeApi;
  protected readonly API_URL = `${this.youYubeApi}${this.playListId}&key=${this.apiKey}&maxResults=50`;

  public getPlayList() {
    return this.httpC.get(this.API_URL);
  }

}
