import { AppFacade } from './../../+ngrx/state/facades/app.facade';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class HomepageFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
