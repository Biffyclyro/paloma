import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VideosComponent } from './videos/videos.component';
import { BioComponent } from './bio/bio.component';
import { BioEspComponent } from './bio-esp/bio-esp.component';
import { BioIngComponent } from './bio-ing/bio-ing.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import { PressComponent } from './press/press.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScoresComponent } from './scores/scores.component';


@NgModule({
    declarations: [
      HomeComponent,
      NavBarComponent,
      VideosComponent,
      BioComponent,
      BioEspComponent,
      BioIngComponent,
      ContatoComponent,
      FooterComponent,
      PressComponent,
      ScheduleComponent,
      ScoresComponent
    ],
    exports: [
        NavBarComponent,
        FooterComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        PagesRoutingModule
    ]
})
export class PagesModule { }
