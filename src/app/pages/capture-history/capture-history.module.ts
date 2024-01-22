import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaptureHistoryRoutingModule } from './capture-history-routing.module';
import { CaptureHistoryComponent } from './capture-history/capture-history.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    CaptureHistoryComponent
  ],
  imports: [
    CommonModule,
    CaptureHistoryRoutingModule,ComponentsModule
  ]
})
export class CaptureHistoryModule { }
