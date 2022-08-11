import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { PodcastListItemComponent } from './components/podcast-list-item/podcast-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PodcastListComponent, PodcastListItemComponent, MenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  exports: [PodcastListComponent, MenuComponent]
})
export class PodcastListModule { }
