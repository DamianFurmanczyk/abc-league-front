import { Router, ActivationEnd } from '@angular/router';
import { currencyData } from './../models/currencyData.interface';
import { Observable, Subject, fromEvent } from 'rxjs';
import { AppFacade } from './../core/state/facades/app.facade';
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
    if(targetElement.classList.contains('hamburger__inner')) {
      this.nav_ul.classList.toggle('active');
      targetElement.parentElement.classList.toggle('hamburger--open');
    }
    if(targetElement.classList.contains('hamburger')) {
      this.nav_ul.classList.toggle('active');
      targetElement.classList.toggle('hamburger--open');
    }

    this.elementsThatNeedToDeactivateOnWindowClick.forEach(
      elArr=> elArr.forEach(
        (el: HTMLElement) => {
          targetElement == el || (targetElement == el.previousElementSibling && el.previousElementSibling.classList.contains('trigger'))? null : el.classList.remove('active')
        }
      )
    )

  }

  elementsThatNeedToDeactivateOnWindowClick;
  destroyed$: Subject<boolean> = new Subject();

  currency$: Observable<currencyData>;
  homepageUrl: boolean = true;
  scrollStyles: boolean = false;
  nav_ul: HTMLElement;

  showCookiesBar = true;

  scrollActiveNavNoMatterWhat;

  ngAfterViewInit() {
    console.log('view init')
    this.nav_ul = document.querySelector('#nav_ul');
    this.elementsThatNeedToDeactivateOnWindowClick = this.getElementsThatNeedToDeactivateOnWindowClick();
  }

  constructor(private facade: AppFacade, router: Router) { 
    this.currency$ = this.facade.currency$;
    this.scrollActiveNavNoMatterWhat = window.innerWidth < 981;

    router.events.pipe(filter(event => event instanceof ActivationEnd),
    tap((e: ActivationEnd) => {
      this.elementsThatNeedToDeactivateOnWindowClick = this.getElementsThatNeedToDeactivateOnWindowClick();

      this.homepageUrl = e.snapshot['_routerState'].url == '/';
    }),
    takeUntil(this.destroyed$)
    ).subscribe();

    fromEvent(window, 'scroll').pipe(
      throttleTime(50, undefined, {leading: true, trailing: true}),
      tap(() => {
        // console.log(e);
        this.scrollStyles = window.pageYOffset > 0;
        // console.log(this.scrollStyles)
        // console.log(window.pageYOffset)
      }),
      takeUntil(this.destroyed$)
    ).subscribe();

    fromEvent(window, 'resize').pipe(
      throttleTime(200, undefined, {leading: true, trailing: true}),
      tap(() => {
        this.scrollActiveNavNoMatterWhat = window.innerWidth < 981;
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
