import { Component, Input, OnInit } from '@angular/core';
import { PodcastItem } from '../../interfaces/podcast-item';

@Component({
  selector: 'app-podcast-list-item',
  templateUrl: './podcast-list-item.component.html',
  styleUrls: ['./podcast-list-item.component.scss']
})
export class PodcastListItemComponent {
  @Input() podcast: PodcastItem;
  @Input() number: number;
  constructor() { }
}
