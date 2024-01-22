import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsReferralConfirmationComponent } from './windows-referral-confirmation.component';

describe('WindowsReferralConfirmationComponent', () => {
  let component: WindowsReferralConfirmationComponent;
  let fixture: ComponentFixture<WindowsReferralConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WindowsReferralConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowsReferralConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
