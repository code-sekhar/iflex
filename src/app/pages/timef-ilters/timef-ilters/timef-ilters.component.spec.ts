import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimefIltersComponent } from './timef-ilters.component';

describe('TimefIltersComponent', () => {
  let component: TimefIltersComponent;
  let fixture: ComponentFixture<TimefIltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimefIltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimefIltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
