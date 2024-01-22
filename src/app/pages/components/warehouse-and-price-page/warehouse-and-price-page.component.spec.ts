import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseAndPricePageComponent } from './warehouse-and-price-page.component';

describe('WarehouseAndPricePageComponent', () => {
  let component: WarehouseAndPricePageComponent;
  let fixture: ComponentFixture<WarehouseAndPricePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseAndPricePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarehouseAndPricePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
