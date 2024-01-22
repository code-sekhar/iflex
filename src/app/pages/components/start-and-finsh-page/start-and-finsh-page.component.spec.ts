import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAndFinshPageComponent } from './start-and-finsh-page.component';

describe('StartAndFinshPageComponent', () => {
  let component: StartAndFinshPageComponent;
  let fixture: ComponentFixture<StartAndFinshPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartAndFinshPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartAndFinshPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
