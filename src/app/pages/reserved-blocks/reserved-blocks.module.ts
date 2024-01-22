import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservedBlocksRoutingModule } from './reserved-blocks-routing.module';
import { ReservedBlocksComponent } from './reserved-blocks/reserved-blocks.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ReservedBlocksComponent
  ],
  imports: [
    CommonModule,
    ReservedBlocksRoutingModule,ComponentsModule
  ]
})
export class ReservedBlocksModule { }
