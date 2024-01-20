import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFuntionComponent } from './delete-funtion.component';

describe('DeleteFuntionComponent', () => {
  let component: DeleteFuntionComponent;
  let fixture: ComponentFixture<DeleteFuntionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteFuntionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteFuntionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
