import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PodcastListModule } from './podcast-list/podcast-list.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PodcastListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
