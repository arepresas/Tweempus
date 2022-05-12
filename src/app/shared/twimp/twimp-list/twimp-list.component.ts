import { Component, OnInit } from '@angular/core';
import { Author } from '../../author/author.model';
import { Twimp } from '../twimp.model';

@Component({
  selector: 'tweempus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrls: ['./twimp-list.component.css'],
})
export class TwimpListComponent implements OnInit {
  text: string =
    'Lorem ipsum dolor sit amet, consectetur adipis dis eiusmod tempor incididunt ut labore et dolore magna aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  authors: Author[] = [];
  twimps: Twimp[] = [];

  ngOnInit(): void {
    this.authors.push(new Author(1));
    this.twimps.push(
      new Twimp(1, '', this.authors[0], this.text, '01/01/2020')
    );
    this.twimps.push(
      new Twimp(2, '', this.authors[0], this.text, '01/01/2020')
    );
    this.twimps.push(
      new Twimp(3, '', this.authors[0], this.text, '01/01/2020')
    );
    this.twimps.push(
      new Twimp(4, '', this.authors[0], this.text, '01/01/2020')
    );
  }
}
