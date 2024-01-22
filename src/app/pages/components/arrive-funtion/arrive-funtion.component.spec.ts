import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriveFuntionComponent } from './arrive-funtion.component';

describe('ArriveFuntionComponent', () => {
  let component: ArriveFuntionComponent;
  let fixture: ComponentFixture<ArriveFuntionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArriveFuntionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArriveFuntionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
