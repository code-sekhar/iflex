import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeToDoBlockListComponent } from './home-to-do-block-list.component';

describe('HomeToDoBlockListComponent', () => {
  let component: HomeToDoBlockListComponent;
  let fixture: ComponentFixture<HomeToDoBlockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeToDoBlockListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeToDoBlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
