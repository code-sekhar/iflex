import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideberComponent } from './sideber/sideber.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    SideberComponent
  ],
  imports: [
    CommonModule,ComponentsModule
  ],
  exports: [
    SideberComponent
  ]
})
export class SideberModule { }
