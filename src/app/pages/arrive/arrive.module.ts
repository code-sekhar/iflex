import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArriveRoutingModule } from './arrive-routing.module';
import { ArriveComponent } from './arrive/arrive.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ArriveComponent
  ],
  imports: [
    CommonModule,
    ArriveRoutingModule,ComponentsModule
  ]
})
export class ArriveModule { }
