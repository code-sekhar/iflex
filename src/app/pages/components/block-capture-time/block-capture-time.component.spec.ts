import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCaptureTimeComponent } from './block-capture-time.component';

describe('BlockCaptureTimeComponent', () => {
  let component: BlockCaptureTimeComponent;
  let fixture: ComponentFixture<BlockCaptureTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockCaptureTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockCaptureTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
