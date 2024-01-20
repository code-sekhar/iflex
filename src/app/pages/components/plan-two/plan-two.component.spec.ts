import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTwoComponent } from './plan-two.component';

describe('PlanTwoComponent', () => {
  let component: PlanTwoComponent;
  let fixture: ComponentFixture<PlanTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
