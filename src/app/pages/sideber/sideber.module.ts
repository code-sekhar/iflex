import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideberComponent } from './sideber/sideber.component';
import { ComponentsModule } from '../components/components.module';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    SideberComponent
  ],
  imports: [
    CommonModule,ComponentsModule,RouterLink
  ],
  exports: [
    SideberComponent
  ]
})
export class SideberModule { }
