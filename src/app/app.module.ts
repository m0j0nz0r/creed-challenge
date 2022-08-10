import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PodcastListModule } from './podcast-list/podcast-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PodcastListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
