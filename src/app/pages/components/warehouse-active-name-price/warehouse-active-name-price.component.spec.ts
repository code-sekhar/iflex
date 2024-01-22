import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseActiveNamePriceComponent } from './warehouse-active-name-price.component';

describe('WarehouseActiveNamePriceComponent', () => {
  let component: WarehouseActiveNamePriceComponent;
  let fixture: ComponentFixture<WarehouseActiveNamePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseActiveNamePriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarehouseActiveNamePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
