import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VideosComponent} from './videos/videos.component';
import {BioComponent} from './bio/bio.component';
import {BioEspComponent} from './bio-esp/bio-esp.component';
import {BioIngComponent} from './bio-ing/bio-ing.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'bio', component: BioComponent},
  {path: 'bioEsp', component: BioEspComponent},
  {path: 'bioIng', component: BioIngComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
