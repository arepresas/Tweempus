import { Observable, catchError } from 'rxjs';

import { ApiUtils } from '../shared/api-utils';
import { AuthorService } from '../shared/author/author.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from './token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private token?: Token = undefined;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authorService: AuthorService
  ) {}

  isAuthenticated(): boolean {
    return this.token !== undefined;
  }

  login(idAuthor: string): void {
    this.authorService.getAuthor(idAuthor).subscribe((author) => {
      let tokenGenerated = this.generateToken();
      this.saveSession(tokenGenerated, author.id).subscribe((response: any) => {
        this.token = new Token(response['id'], response['author']);
        this.router.navigate(['/dashboard']);
      });
    });
  }

  logout(): void {
    this.deleteSession().subscribe((response) => {
      this.token = undefined;
      this.router.navigate(['/login']);
    });
  }

  generateToken(): string {
    let date: number = Date.now();
    let text: string = '';
    let possible: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    text += date;

    return text;
  }

  saveSession(tokenGenerated: string, idAuthor: string): Observable<Object> {
    let session: Object = {
      id: tokenGenerated,
      author: idAuthor,
    };

    return this.httpClient
      .post(ApiUtils.AUTH_TOKEN, session)
      .pipe(catchError(ApiUtils.handleError));
  }
  deleteSession(): Observable<Object> {
    return this.httpClient
      .delete(ApiUtils.AUTH_TOKEN + '/' + this.token?.key)
      .pipe(catchError(ApiUtils.handleError));
  }
}
