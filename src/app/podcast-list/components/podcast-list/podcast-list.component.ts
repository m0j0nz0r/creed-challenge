import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PodcastItem } from '../../interfaces/podcast-item';
import { PodcastListService } from '../../services/podcast-list.service';
import { ActivatedRoute } from '@angular/router';

const defaultGenreId = 140;
@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss']
})
export class PodcastListComponent implements OnInit, OnDestroy {
  podcastList$: Observable<PodcastItem[]>;
  unsubscribe$: Subject<void> = new Subject();
  constructor(
    private podcastListService: PodcastListService,
    private route: ActivatedRoute) {
    }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params =>{
      this.podcastList$ = this.podcastListService.getPodcastByGenre(parseInt(params.genreId) ?? defaultGenreId).pipe(
        takeUntil(this.unsubscribe$)
      )
    })
  }
}
