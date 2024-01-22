import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStartTimeComponent } from './active-start-time.component';

describe('ActiveStartTimeComponent', () => {
  let component: ActiveStartTimeComponent;
  let fixture: ComponentFixture<ActiveStartTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveStartTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveStartTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
