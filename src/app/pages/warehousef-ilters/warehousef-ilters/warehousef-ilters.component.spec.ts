import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousefIltersComponent } from './warehousef-ilters.component';

describe('WarehousefIltersComponent', () => {
  let component: WarehousefIltersComponent;
  let fixture: ComponentFixture<WarehousefIltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehousefIltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarehousefIltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
