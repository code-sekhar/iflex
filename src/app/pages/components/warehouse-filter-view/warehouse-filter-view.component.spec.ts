import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseFilterViewComponent } from './warehouse-filter-view.component';

describe('WarehouseFilterViewComponent', () => {
  let component: WarehouseFilterViewComponent;
  let fixture: ComponentFixture<WarehouseFilterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseFilterViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarehouseFilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
