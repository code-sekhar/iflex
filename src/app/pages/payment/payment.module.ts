import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { SideberModule } from '../sideber/sideber.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,SideberModule,ComponentsModule
  ]
})
export class PaymentModule { }
