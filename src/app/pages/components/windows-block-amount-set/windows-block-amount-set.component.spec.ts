import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsBlockAmountSetComponent } from './windows-block-amount-set.component';

describe('WindowsBlockAmountSetComponent', () => {
  let component: WindowsBlockAmountSetComponent;
  let fixture: ComponentFixture<WindowsBlockAmountSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WindowsBlockAmountSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowsBlockAmountSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
