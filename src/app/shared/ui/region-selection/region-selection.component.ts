import { AppFacade } from './../../../+ngrx/state/facades/app.facade';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region-selection',
  templateUrl: './region-selection.component.html',
  styleUrls: ['./region-selection.component.scss']
})
export class RegionSelectionComponent implements OnInit {
  regions;
  
  constructor(private route: ActivatedRoute, private facade: AppFacade) { }

  selectRegion(regionId: number) {

  }

  ngOnInit(): void {
    this.regions = this.route.snapshot.data.regions;
    console.log(this.regions);
  }

}
