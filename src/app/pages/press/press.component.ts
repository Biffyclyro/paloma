import { Component, OnInit } from '@angular/core';

import {PressService, Img} from '../../core/services/press.service';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit {
  public images: Img[];

  constructor(private pressService: PressService) { }

  ngOnInit(): void {
    this.pressService.getPress().subscribe(response => {
      this.images = response.data.images;
    });
  }

}
