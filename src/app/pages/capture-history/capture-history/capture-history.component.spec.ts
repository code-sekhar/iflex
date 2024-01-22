import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureHistoryComponent } from './capture-history.component';

describe('CaptureHistoryComponent', () => {
  let component: CaptureHistoryComponent;
  let fixture: ComponentFixture<CaptureHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaptureHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaptureHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
