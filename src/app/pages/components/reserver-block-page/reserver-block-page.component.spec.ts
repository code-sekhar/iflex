import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverBlockPageComponent } from './reserver-block-page.component';

describe('ReserverBlockPageComponent', () => {
  let component: ReserverBlockPageComponent;
  let fixture: ComponentFixture<ReserverBlockPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReserverBlockPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReserverBlockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
