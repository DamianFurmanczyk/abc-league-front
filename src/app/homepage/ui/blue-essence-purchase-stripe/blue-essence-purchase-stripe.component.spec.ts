import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueEssencePurchaseStripeComponent } from './blue-essence-purchase-stripe.component';

describe('BlueEssencePurchaseStripeComponent', () => {
  let component: BlueEssencePurchaseStripeComponent;
  let fixture: ComponentFixture<BlueEssencePurchaseStripeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueEssencePurchaseStripeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueEssencePurchaseStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
