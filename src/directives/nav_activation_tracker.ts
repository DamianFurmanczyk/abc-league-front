import { Directive, ElementRef, HostListener } from '@angular/core';

// Directive decorator
@Directive({ selector: '[navTrackScroll]' })
// Directive class
export class NavTrackScroll {        
    @HostListener('click') onClick() {

  }
    constructor(el: ElementRef) {

    }
}