import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',loadChildren:()=>import('../app/pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'dashboad',loadChildren:()=>import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'payment',loadChildren:()=>import('./pages/payment/payment.module').then(m=>m.PaymentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
