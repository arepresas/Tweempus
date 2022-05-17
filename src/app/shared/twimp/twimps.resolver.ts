import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Twimp } from './twimp.model';
import { TwimpService } from './twimp.service';

@Injectable({
  providedIn: 'root',
})
export class TwimpsResolver implements Resolve<Observable<Twimp[]>> {
  constructor(private twimpService: TwimpService) {}

  resolve(): Observable<Twimp[]> {
    return this.twimpService.getTwimps();
  }
}
