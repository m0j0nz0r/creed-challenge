import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PodcastItem } from '../../interfaces/podcast-item';
import { PodcastListService } from '../../services/podcast-list.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss']
})
export class PodcastListComponent implements OnInit, OnDestroy {
  podcastList$: Observable<PodcastItem[]>;
  unsubscribe$: Subject<void> = new Subject();
  genreId: number = 140;
  constructor(private podcastListService: PodcastListService) { }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.podcastList$ = this.podcastListService.getPodcastByGenre(this.genreId).pipe(
      takeUntil(this.unsubscribe$)
    );
  }
}
