import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFuntionWarehouseSelectComponent } from './reserve-funtion-warehouse-select.component';

describe('ReserveFuntionWarehouseSelectComponent', () => {
  let component: ReserveFuntionWarehouseSelectComponent;
  let fixture: ComponentFixture<ReserveFuntionWarehouseSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReserveFuntionWarehouseSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReserveFuntionWarehouseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
