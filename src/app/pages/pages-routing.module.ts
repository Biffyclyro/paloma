import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VideosComponent} from './videos/videos.component';
import {BioComponent} from './bio/bio.component';
import {BioEspComponent} from './bio-esp/bio-esp.component';
import {BioIngComponent} from './bio-ing/bio-ing.component';
import {ContatoComponent} from './contato/contato.component';
import {PressComponent} from './press/press.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {ScoresComponent} from './scores/scores.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'bio', component: BioComponent},
  {path: 'bioEsp', component: BioEspComponent},
  {path: 'bioIng', component: BioIngComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'press', component: PressComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'scores', component: ScoresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
