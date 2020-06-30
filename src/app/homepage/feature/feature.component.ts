import { AppFacade } from './../../+ngrx/state/facades/app.facade';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class HomepageFeatureComponent implements OnInit {
  accounts: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.parent.data
    .subscribe((data) => {
      this.accounts = data.accounts;
    });
    
  }

}
