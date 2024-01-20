import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreshipPageComponent } from './membreship-page.component';

describe('MembreshipPageComponent', () => {
  let component: MembreshipPageComponent;
  let fixture: ComponentFixture<MembreshipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembreshipPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembreshipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
