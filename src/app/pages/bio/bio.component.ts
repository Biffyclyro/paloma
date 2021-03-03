import { Component, ElementRef, AfterViewInit , ViewChild } from '@angular/core';
import {BioService} from '../../core/services/bio.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements AfterViewInit {
  bioDto: BioDto;
  elementMap = new Map<string, ElementRef>();
  @ViewChild('port') bioPort: ElementRef;
  @ViewChild('esp') bioEsp: ElementRef;
  @ViewChild('ing') bioIng: ElementRef;



  constructor(private bioSvc: BioService ) {

    this.bioSvc.getBio().subscribe((resp: BioDto) => this.bioDto = resp);
  }

  switchBio(nova: string, velha: string) {

    console.log(this.bioPort);
    this.elementMap.get(velha).nativeElement.setAttribute('hidden', '');
    this.elementMap.get(nova).nativeElement.removeAttribute('hidden');

  }

  ngAfterViewInit() {
    this.elementMap.set('port', this.bioPort);
    this.elementMap.set('esp', this.bioEsp);
    this.elementMap.set('ing', this.bioIng);
  }

}

interface BioDto {
  esp: string;
  ing: string;
  port: string;
}
