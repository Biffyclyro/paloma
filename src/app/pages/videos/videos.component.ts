import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../services/video.service';
import {map} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  playList: item[];

  constructor(private videoService: VideoService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoService.getPlayList().subscribe( (res: Retorno) => {
       this.playList = res.items;
       this.playList.forEach(i => i.snippet.resourceId
           .videoId = `https://www.youtube.com/embed/${i.snippet.resourceId.videoId}`);
       this.playList.forEach(i => console.log(i));
    });
  }

}

type Retorno = {
  items: item[]
};

type item = {
  snippet: snippet
};

type snippet = {
  title: string,
  resourceId: resource
};

type resource = {
  videoId: string
};
