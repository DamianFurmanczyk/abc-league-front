import { Region } from './../../../models/region.interface';
import { tap, takeUntil } from 'rxjs/operators';
import { AppFacade } from './../../../+ngrx/state/facades/app.facade';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-region-selection',
  templateUrl: './region-selection.component.html',
  styleUrls: ['./region-selection.component.scss']
})

export class RegionSelectionComponent implements OnInit, OnDestroy {
  set selectedRegion(region: Region) {
    this.selectedRegionSet = region;
  };
  destroyed$: Subject<boolean> = new Subject();

  regions: Region[];
  selectedRegionSet: Region;
  
  constructor(private route: ActivatedRoute, private facade: AppFacade) { }

  selectRegion(regionId: number) {
    this.facade.SelectRegion(regionId);
  }

  ngOnInit(): void {
    
    this.facade.selectedRegion$.pipe(
      tap(res => this.selectedRegion = res),
      takeUntil(this.destroyed$)
    ).subscribe();

    this.facade.regions$.pipe(
      tap(res => this.regions = res),
      takeUntil(this.destroyed$)
    ).subscribe();

    this.route.data.pipe(tap(console.log))
    .subscribe((data) => {
      // this.regions = data.regions.pipe();
      // console.log(this.regions)
      // console.log(data)
    });

  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

}
