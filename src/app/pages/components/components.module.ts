import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceAreaComponent } from './service-area/service-area.component';
import { NameComponent } from './name/name.component';
import { StandingComponent } from './standing/standing.component';
import { ExpireComponent } from './expire/expire.component';



@NgModule({
  declarations: [
    ServiceAreaComponent,
    NameComponent,
    StandingComponent,
    ExpireComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NameComponent,ServiceAreaComponent,ExpireComponent,StandingComponent
  ]
})
export class ComponentsModule { }
