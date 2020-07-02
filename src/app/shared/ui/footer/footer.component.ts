import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  @ViewChild('faqColumn') faqCol: ElementRef;
  dds: NodeListOf<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.faqCol.nativeElement.querySelectorAll('dt').forEach((el: HTMLElement) => el.addEventListener('click', toggleSiblingActiveClass))
    this.dds = this.faqCol.nativeElement.querySelectorAll('dd');
    const FooterComponent = this;

    function  toggleSiblingActiveClass() {
      const siblAlreadyActiveFlag = <HTMLElement>this.nextSibling.classList.contains('active');

      FooterComponent.dds.forEach(el => el.classList.remove('active'));

      if(!siblAlreadyActiveFlag) <HTMLElement>this.nextSibling.classList.add('active');
    }
  }



}
