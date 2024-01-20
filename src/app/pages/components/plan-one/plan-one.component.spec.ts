import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanOneComponent } from './plan-one.component';

describe('PlanOneComponent', () => {
  let component: PlanOneComponent;
  let fixture: ComponentFixture<PlanOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
