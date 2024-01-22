import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHistoryPageComponent } from './block-history-page.component';

describe('BlockHistoryPageComponent', () => {
  let component: BlockHistoryPageComponent;
  let fixture: ComponentFixture<BlockHistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockHistoryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
