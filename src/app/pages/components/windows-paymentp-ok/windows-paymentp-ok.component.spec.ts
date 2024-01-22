import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsPaymentpOkComponent } from './windows-paymentp-ok.component';

describe('WindowsPaymentpOkComponent', () => {
  let component: WindowsPaymentpOkComponent;
  let fixture: ComponentFixture<WindowsPaymentpOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WindowsPaymentpOkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowsPaymentpOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
