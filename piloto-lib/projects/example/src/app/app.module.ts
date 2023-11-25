import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PilotoLibModule } from 'piloto-lib';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PilotoLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

