import { Observable, map } from 'rxjs';

import { ApiUtils } from '../api-utils';
import { Author } from '../author/author.model';
import { AuthorService } from '../author/author.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Twimp } from './twimp.model';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class TwimpService {
  constructor(
    private httpClient: HttpClient,
    private authorService: AuthorService
  ) {}

  isTwimpFavouriteByAuthor(
    authorId: number,
    twimpId: string
  ): Observable<boolean> {
    return this.httpClient
      .get<any>(`${ApiUtils.TWIMPS_FAVOURITE_URL}/${authorId}`)
      .pipe(map((response) => response.twimps.includes(twimpId)));
  }

  getTwimps(): Observable<Twimp[]> {
    return this.httpClient.get<Twimp[]>(ApiUtils.TWIMPS_URL).pipe(
      map((twimps: Twimp[]) =>
        twimps.map((twimp) => {
          twimp.cost = Utils.generateRandomFloatNumber();
          const date: string[] = twimp.timestamp.toString().split('-');
          twimp.timestamp = new Date(+date[2], +date[1], +date[0]);
          twimp.url = `${ApiUtils.TWIMPS_URL}/${twimp.id}`;
          this.authorService
            .getAuthor(twimp.author.toString())
            .subscribe((author: Author) => {
              twimp.author = author;
            });
          this.isTwimpFavouriteByAuthor(1, twimp.id).subscribe((res) => {
            twimp.favorite = res;
          });

          return twimp;
        })
      )
    );
  }
}
