import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivedSuccessfulComponent } from './arrived-successful.component';

describe('ArrivedSuccessfulComponent', () => {
  let component: ArrivedSuccessfulComponent;
  let fixture: ComponentFixture<ArrivedSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrivedSuccessfulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrivedSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
