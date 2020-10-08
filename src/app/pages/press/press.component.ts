import { Component, OnInit } from '@angular/core';

import {PressService, Img, Dado} from '../../core/services/press.service';
import {DtoData} from 'src/app/app.module';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit {
  public images: Img[];

  constructor(private pressService: PressService) { }

  ngOnInit(): void {
    this.pressService.getPress().subscribe((response: DtoData<Dado>) => {
      this.images = response.data.images;
    });
  }

}
