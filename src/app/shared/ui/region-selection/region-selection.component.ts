import { Region } from './../../../models/region.interface';
import { tap } from 'rxjs/operators';
import { AppFacade } from './../../../+ngrx/state/facades/app.facade';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-region-selection',
  templateUrl: './region-selection.component.html',
  styleUrls: ['./region-selection.component.scss']
})

export class RegionSelectionComponent implements OnInit, OnDestroy {
  set selectedRegion(region: Region) {
    this.selectedRegionSet = region;
  };

  sub: Subscription;

  regions: Region[];
  selectedRegionSet: Region;
  
  constructor(private route: ActivatedRoute, private facade: AppFacade) { }

  selectRegion(regionId: number) {
    this.facade.SelectRegion(regionId);
  }

  ngOnInit(): void {
    
    this.sub = this.facade.selectedRegion$.pipe(
      tap(res => this.selectedRegion = res)
    ).subscribe();

    this.route.parent.data
    .subscribe((data) => {
      this.regions = data.regions;
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
