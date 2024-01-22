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
import { ReferralComponent } from './referral/referral.component';
import { ArrivePageComponent } from './arrive-page/arrive-page.component';
import { ArriveFuntionComponent } from './arrive-funtion/arrive-funtion.component';
import { WarehouseAndPricePageComponent } from './warehouse-and-price-page/warehouse-and-price-page.component';
import { WarehouseFilterViewComponent } from './warehouse-filter-view/warehouse-filter-view.component';
import { WarehouseActiveNamePriceComponent } from './warehouse-active-name-price/warehouse-active-name-price.component';
import { StartAndFinshPageComponent } from './start-and-finsh-page/start-and-finsh-page.component';
import { DayTimeComponent } from './day-time/day-time.component';
import { ActiveStartTimeComponent } from './active-start-time/active-start-time.component';
import { ReserverBlockPageComponent } from './reserver-block-page/reserver-block-page.component';
import { ReserveFuntionOnlyComponent } from './reserve-funtion-only/reserve-funtion-only.component';
import { ReserveFuntionRecomendedComponent } from './reserve-funtion-recomended/reserve-funtion-recomended.component';
import { ReserveFuntionWarehouseSelectComponent } from './reserve-funtion-warehouse-select/reserve-funtion-warehouse-select.component';
import { BlockHistoryPageComponent } from './block-history-page/block-history-page.component';
import { HistoryComponent } from './history/history.component';
import { BlockCaptureTimeComponent } from './block-capture-time/block-capture-time.component';
import { ArrivedSuccessfulComponent } from './arrived-successful/arrived-successful.component';
import { WindowsPaymentpOkComponent } from './windows-paymentp-ok/windows-paymentp-ok.component';
import { windowTime } from 'rxjs';
import { WindowsBlockDeleteComponent } from './windows-block-delete/windows-block-delete.component';
import { WindowsReferralConfirmationComponent } from './windows-referral-confirmation/windows-referral-confirmation.component';
import { WindowsCoupontAppliedComponent } from './windows-coupont-applied/windows-coupont-applied.component';
import { WindowsBlockAmountSetComponent } from './windows-block-amount-set/windows-block-amount-set.component';



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
    CouponComponent,
    ReferralComponent,
    ArrivePageComponent,
    ArriveFuntionComponent,
    WarehouseAndPricePageComponent,
    WarehouseFilterViewComponent,
    WarehouseActiveNamePriceComponent,
    StartAndFinshPageComponent,
    DayTimeComponent,
    ActiveStartTimeComponent,
    ReserverBlockPageComponent,
    ReserveFuntionOnlyComponent,
    ReserveFuntionRecomendedComponent,
    ReserveFuntionWarehouseSelectComponent,
    BlockHistoryPageComponent,
    HistoryComponent,
    BlockCaptureTimeComponent,
    ArrivedSuccessfulComponent,
    WindowsPaymentpOkComponent,
    WindowsBlockDeleteComponent,
    WindowsReferralConfirmationComponent,
    WindowsCoupontAppliedComponent,
    WindowsBlockAmountSetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NameComponent,ServiceAreaComponent,ExpireComponent,StandingComponent,HomeTitleAndAmountComponent,HomeToDoBlockListComponent,DeleteFuntionComponent,MembreshipPageComponent,PlanOneComponent,CouponComponent,ReferralComponent,ArrivePageComponent,ArriveFuntionComponent,WarehouseAndPricePageComponent,WarehouseFilterViewComponent,StartAndFinshPageComponent,DayTimeComponent,ActiveStartTimeComponent,ReserverBlockPageComponent,ReserveFuntionOnlyComponent,ReserveFuntionRecomendedComponent,ReserveFuntionWarehouseSelectComponent,BlockHistoryPageComponent,BlockCaptureTimeComponent,ArrivedSuccessfulComponent,HistoryComponent,WindowsPaymentpOkComponent,WindowsBlockDeleteComponent,WindowsReferralConfirmationComponent,WindowsCoupontAppliedComponent,WindowsBlockAmountSetComponent
  ]
})
export class ComponentsModule { }
