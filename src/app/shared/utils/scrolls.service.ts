import { Router, ActivationEnd } from '@angular/router';
import { Injectable } from '@angular/core';

import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
    constructor(private router: Router) { }

    pingWhenNavigated() {
        return this.router.events.pipe(filter(event => event instanceof ActivationEnd),
            first()
        );
    }

    scrollToElem(elSel: string) {
        
        const elY = window.document.querySelector(elSel).getBoundingClientRect().y + + document.documentElement.scrollTop;
        window.scrollTo({
            top: elY,
            behavior: 'smooth',
          });
          
    }

    navigateAndScrollToElem(elSel: string) {
        this.pingWhenNavigated().subscribe(e => this.scrollToElem(elSel));
    }

}
