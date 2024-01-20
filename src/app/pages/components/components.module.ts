import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceAreaComponent } from './service-area/service-area.component';
import { NameComponent } from './name/name.component';
import { StandingComponent } from './standing/standing.component';
import { ExpireComponent } from './expire/expire.component';
import { HomeTitleAndAmountComponent } from './home-title-and-amount/home-title-and-amount.component';
import { HomeToDoBlockListComponent } from './home-to-do-block-list/home-to-do-block-list.component';
import { DeleteFuntionComponent } from './delete-funtion/delete-funtion.component';
import { MembreshipPageComponent } from './membreship-page/membreship-page.component';
import { PlanOneComponent } from './plan-one/plan-one.component';
import { PlanTwoComponent } from './plan-two/plan-two.component';
import { CouponComponent } from './coupon/coupon.component';



@NgModule({
  declarations: [
    ServiceAreaComponent,
    NameComponent,
    StandingComponent,
    ExpireComponent,
    HomeTitleAndAmountComponent,
    HomeToDoBlockListComponent,
    DeleteFuntionComponent,
    MembreshipPageComponent,
    PlanOneComponent,
    PlanTwoComponent,
    CouponComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NameComponent,ServiceAreaComponent,ExpireComponent,StandingComponent,HomeTitleAndAmountComponent,HomeToDoBlockListComponent,DeleteFuntionComponent,MembreshipPageComponent,PlanOneComponent,CouponComponent
  ]
})
export class ComponentsModule { }
