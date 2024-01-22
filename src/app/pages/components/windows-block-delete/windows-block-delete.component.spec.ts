import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsBlockDeleteComponent } from './windows-block-delete.component';

describe('WindowsBlockDeleteComponent', () => {
  let component: WindowsBlockDeleteComponent;
  let fixture: ComponentFixture<WindowsBlockDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WindowsBlockDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowsBlockDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
