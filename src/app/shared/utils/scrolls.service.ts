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

    scrollToTopOnNavigate() {
        this.pingWhenNavigated().subscribe(e => this.scrollToTop());
    }

    scrollToTop(smooth: boolean = false) {
        window.scrollTo({
            top: 0,
            behavior: smooth ? 'smooth' : 'auto',
          });
    }

    navigateAndScrollToElem(elSel: string, destination: string) {
        this.router.navigate([destination]);
        this.pingWhenNavigated().subscribe(e => {
            this.scrollToTop();
            this.scrollToElem(elSel)
            }
        );
    }

}
