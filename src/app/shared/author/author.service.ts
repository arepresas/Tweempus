import { Observable, catchError, map } from 'rxjs';

import { ApiUtils } from '../api-utils';
import { Author } from './author.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private httpClient: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(ApiUtils.AUTHOR_URL).pipe(
      map((authors: Author[]) =>
        ApiUtils.addUrlToObjectList(authors, ApiUtils.AUTHOR_URL)
      ),
      catchError(ApiUtils.handleError)
    );
  }

  getAuthor(id: string): Observable<Author> {
    return this.httpClient.get<Author>(`${ApiUtils.AUTHOR_URL}/${id}`).pipe(
      map((author: Author) =>
        ApiUtils.addUrlToObject(author, `${ApiUtils.AUTHOR_URL}/${id}`)
      ),
      catchError(ApiUtils.handleError)
    );
  }
}
