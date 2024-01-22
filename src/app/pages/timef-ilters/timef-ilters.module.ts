import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimefIltersRoutingModule } from './timef-ilters-routing.module';
import { TimefIltersComponent } from './timef-ilters/timef-ilters.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    TimefIltersComponent
  ],
  imports: [
    CommonModule,
    TimefIltersRoutingModule,ComponentsModule
  ]
})
export class TimefIltersModule { }
