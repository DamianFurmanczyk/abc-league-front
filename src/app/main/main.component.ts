import { Router, ActivationEnd } from '@angular/router';
import { currencyData } from './../models/currencyData.interface';
import { Observable, Subject, fromEvent } from 'rxjs';
import { AppFacade } from './../+ngrx/state/facades/app.facade';
import { Component, OnInit, OnDestroy, HostListener, AfterViewInit } from '@angular/core';
import { filter, tap, takeUntil, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  @HostListener('window:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {

    this.elementsThatNeedToDeactivateOnWindowClick.forEach(
      elArr=> elArr.forEach(
        (el: HTMLElement) => {
          // console.log(el.previousElementSibling)
          // console.log(targetElement)
          // console.log(el.previousElementSibling == targetElement)
          targetElement == el || targetElement == el.previousElementSibling ? null : el.classList.remove('active')
        }
      )
    )

  }

  elementsThatNeedToDeactivateOnWindowClick;
  destroyed$: Subject<boolean> = new Subject();

  onScrollObs = fromEvent(window, 'scroll').pipe(
    throttleTime(10, undefined, {leading: true, trailing: true}),
    tap(e => {
      // console.log(e);
      this.scrollStyles = window.pageYOffset > 0;
      // console.log(this.scrollStyles)
      // console.log(window.pageYOffset)
    }),
    takeUntil(this.destroyed$)
  ).subscribe();

  currency$: Observable<currencyData>;
  homepageUrl: boolean = true;
  scrollStyles: boolean = false;

  ngAfterViewInit() {
    console.log('view init')
    this.elementsThatNeedToDeactivateOnWindowClick = this.getElementsThatNeedToDeactivateOnWindowClick();
  }

  constructor(private facade: AppFacade, router: Router) { 
    this.currency$ = this.facade.currency$;

    router.events.pipe(filter(event => event instanceof ActivationEnd),
    tap((e: ActivationEnd) => {
      this.elementsThatNeedToDeactivateOnWindowClick = this.getElementsThatNeedToDeactivateOnWindowClick();

      this.homepageUrl = e.snapshot['_routerState'].url == '/';
    }),
    takeUntil(this.destroyed$)
    ).subscribe();
}

getElementsThatNeedToDeactivateOnWindowClick() {
  return  [
    document.querySelectorAll('.nav_li--dropdown'),
    document.querySelectorAll(' .faq-column dd'),
    document.querySelectorAll('.links-lists-column .trigger')
];
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
