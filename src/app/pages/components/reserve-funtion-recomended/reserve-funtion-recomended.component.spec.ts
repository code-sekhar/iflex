import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFuntionRecomendedComponent } from './reserve-funtion-recomended.component';

describe('ReserveFuntionRecomendedComponent', () => {
  let component: ReserveFuntionRecomendedComponent;
  let fixture: ComponentFixture<ReserveFuntionRecomendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReserveFuntionRecomendedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReserveFuntionRecomendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
