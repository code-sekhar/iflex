import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehousefIltersRoutingModule } from './warehousef-ilters-routing.module';
import { WarehousefIltersComponent } from './warehousef-ilters/warehousef-ilters.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    WarehousefIltersComponent
  ],
  imports: [
    CommonModule,
    WarehousefIltersRoutingModule,ComponentsModule
  ]
})
export class WarehousefIltersModule { }
