import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFuntionOnlyComponent } from './reserve-funtion-only.component';

describe('ReserveFuntionOnlyComponent', () => {
  let component: ReserveFuntionOnlyComponent;
  let fixture: ComponentFixture<ReserveFuntionOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReserveFuntionOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReserveFuntionOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
