import {Injectable} from '@angular/core';
import {AbstractApiService} from './abstract-api.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService extends AbstractApiService {
  protected readonly playListId = 'PLcw6bO94_u6OZPTGEhH42qNW-l5cLzUjP';
  protected readonly apiKey = 'AIzaSyB3jdF-TIVyarrq1tdSA1pVutygdSJA9TU';
  protected readonly youYubeApi: string = environment.youTubeApi;
  protected readonly API_URL = `${this.youYubeApi}${this.playListId}&key=${this.apiKey}&maxResults=50`;

  public getPlayList(): Observable<Resp> {
    return this.httpC.get<Resp>(this.API_URL);
  }

}

interface Resp {
  items: Item[];
}

interface Item {
  snippet: Snippet;
}

interface Snippet {
  title: string;
  resourceId: Resource;
}

interface Resource {
  videoId: string;
}
