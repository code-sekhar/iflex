import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsCoupontAppliedComponent } from './windows-coupont-applied.component';

describe('WindowsCoupontAppliedComponent', () => {
  let component: WindowsCoupontAppliedComponent;
  let fixture: ComponentFixture<WindowsCoupontAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WindowsCoupontAppliedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowsCoupontAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
