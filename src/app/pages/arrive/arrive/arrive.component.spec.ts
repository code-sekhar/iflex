import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriveComponent } from './arrive.component';

describe('ArriveComponent', () => {
  let component: ArriveComponent;
  let fixture: ComponentFixture<ArriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArriveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
