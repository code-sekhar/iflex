import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SideBersComponent } from '../include/side-bers/side-bers.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,SideBersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,ComponentsModule
  ]
})
export class HomeModule { }
