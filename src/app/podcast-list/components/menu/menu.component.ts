import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PodcastGenre } from '../../interfaces/podcast-genre';
import { PodcastListService } from '../../services/podcast-list.service';
import { ActivatedRoute, Router } from '@angular/router';

const defaultGenreId = 140;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  @Output() optionClick = new EventEmitter<string>()
  genreList$: Observable<PodcastGenre[]>;
  isActive = false;
  currentId = defaultGenreId;
  constructor(
    private podcastListService: PodcastListService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.genreList$ = this.podcastListService.getGenres();
    this.route.queryParams.subscribe(params => this.currentId = parseInt(params.genreId) ?? defaultGenreId);
  }
  genreClick(id: number): void {
    this.router.navigateByUrl(`?genreId=${id}`);
    this.isActive = false;
  }
  isActiveGenre(id: number): boolean{
    return id === this.currentId;
  }
  getLinkClass(id: number): string {
    const base = 'navigation__item-link navigation__item-link'
    return `${base} ${base}${this.currentId === id ? '--active': ''}`; 
  }
}
