import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PagesRoutingModule} from './pages/pages-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
