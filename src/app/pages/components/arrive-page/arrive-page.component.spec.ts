import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivePageComponent } from './arrive-page.component';

describe('ArrivePageComponent', () => {
  let component: ArrivePageComponent;
  let fixture: ComponentFixture<ArrivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrivePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
