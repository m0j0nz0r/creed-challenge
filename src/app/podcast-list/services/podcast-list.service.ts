import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PodcastItem } from '../interfaces/podcast-item';
import { PodcastGenre } from '../interfaces/podcast-genre';

@Injectable({
  providedIn: 'root'
})
export class PodcastListService {
  getPodcastByGenre(id: number): Observable<PodcastItem[]> {
    return this.http.get<PodcastGenre[]>('./assets/data/podcasts-by-genre.json').pipe(
      // find the genre by id, return an empty array if there are none
      map(genreList => genreList.find(g => g.id === id)?.podcasts ?? [])
    );
  }

  constructor(private http: HttpClient) { }

}
