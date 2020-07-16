import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cookie-consent-bar',
  templateUrl: './cookie-consent-bar.component.html',
  styleUrls: ['./cookie-consent-bar.component.scss']
})
export class CookieConsentBarComponent {
  @Output() dismissCookiesBar = new EventEmitter();
  triggerTransition;

  constructor() { }

  transitionAndDismiss() {
    this.triggerTransition = true;
    setTimeout(() => {
      this.dismissCookiesBar.emit();
    }, 400);
  }

}
