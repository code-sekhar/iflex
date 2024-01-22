import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBersComponent } from './side-bers/side-bers.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [SideBersComponent],
  imports: [
    CommonModule,ComponentsModule
  ],
  exports: [
    SideBersComponent
  ]
})
export class SideBersModule { }
