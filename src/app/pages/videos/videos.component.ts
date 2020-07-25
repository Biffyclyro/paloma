import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../core/services/video.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  playList: { title: string, url: SafeResourceUrl }[];

  constructor(private videoService: VideoService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.videoService.getPlayList().subscribe(res => {
      this.playList = res.items.map(i => ({
        title: i.snippet.title,
        url: this.toSafeUrl(i.snippet.resourceId.videoId)
      }));
    });
  }

  private toSafeUrl(id: string): SafeResourceUrl {
    const url = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}


