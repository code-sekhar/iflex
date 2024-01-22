import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedBlocksComponent } from './reserved-blocks.component';

describe('ReservedBlocksComponent', () => {
  let component: ReservedBlocksComponent;
  let fixture: ComponentFixture<ReservedBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservedBlocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservedBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
