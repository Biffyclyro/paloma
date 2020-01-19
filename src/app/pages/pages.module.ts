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


@NgModule({
    declarations: [HomeComponent, NavBarComponent, VideosComponent, BioComponent, BioEspComponent, BioIngComponent, ContatoComponent],
    exports: [
        NavBarComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule
    ]
})
export class PagesModule { }
