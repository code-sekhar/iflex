import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBersComponent } from './side-bers.component';

describe('SideBersComponent', () => {
  let component: SideBersComponent;
  let fixture: ComponentFixture<SideBersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
