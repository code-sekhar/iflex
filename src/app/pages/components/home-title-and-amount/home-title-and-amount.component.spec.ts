import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTitleAndAmountComponent } from './home-title-and-amount.component';

describe('HomeTitleAndAmountComponent', () => {
  let component: HomeTitleAndAmountComponent;
  let fixture: ComponentFixture<HomeTitleAndAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTitleAndAmountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTitleAndAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
