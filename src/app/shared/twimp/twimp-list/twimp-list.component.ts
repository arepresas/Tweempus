import { Component, OnInit } from '@angular/core';

import { Author } from '../../author/author.model';
import { Twimp } from '../twimp.model';
import { Utils } from '../../utils';

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
    for (let i = 0; i < 5; i++) {
      this.twimps.push(
        new Twimp(
          i + 1,
          'http://'.concat(Utils.generateRandomWebsite()),
          new Author(
            i + 1,
            'http://'.concat(Utils.generateRandomWebsite()),
            Utils.generateRandomName(),
            'resources/images/google-icon.png'
          ),
          this.text,
          Utils.generateRandomFloatNumber(),
          Utils.generateRandomDate()
        )
      );
    }
  }
}
