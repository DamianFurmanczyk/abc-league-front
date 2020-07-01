import { Router, ActivationEnd } from '@angular/router';
import { currencyData } from './../models/currencyData.interface';
import { Observable, Subject, fromEvent } from 'rxjs';
import { AppFacade } from './../+ngrx/state/facades/app.facade';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter, tap, takeUntil, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  destroyed$: Subject<boolean> = new Subject();

  onScrollObs = fromEvent(window, 'scroll').pipe(
    throttleTime(300, undefined, {leading: true, trailing: true}),
    tap(e => {
      console.log(e);
      this.scrollStyles = window.pageYOffset > 0;
      console.log(this.scrollStyles)
      console.log(window.pageYOffset)
    }),
    takeUntil(this.destroyed$)
  ).subscribe();

  currency$: Observable<currencyData>;
  homepageUrl: boolean = true;
  scrollStyles: boolean = false;

  constructor(private facade: AppFacade, router: Router) { 
    this.currency$ = this.facade.currency$;

    router.events.pipe(filter(event => event instanceof ActivationEnd),
    tap((e: ActivationEnd) => this.homepageUrl = e.snapshot['_routerState'].url == '/'),
    takeUntil(this.destroyed$)
    ).subscribe();
}

  onCurrencyChange(currency: string) {
    this.facade.LoadCurrency(currency);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}