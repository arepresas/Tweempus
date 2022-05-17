import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Twimp } from '../shared/twimp/twimp.model';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  twimps: Twimp[];

  constructor(private readonly route: ActivatedRoute) {
    this.twimps = this.route.snapshot.data['twimps'];
  }
}
