import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { PodcastListItemComponent } from './components/podcast-list-item/podcast-list-item.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PodcastListComponent, PodcastListItemComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PodcastListComponent]
})
export class PodcastListModule { }
