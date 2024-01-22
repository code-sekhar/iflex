import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path:'',component:HomeComponent,
children:[
      {
        path:'dashboard',loadChildren:()=>import('../dashboard/dashboard.module').then(m=>m.DashboardModule),

      },
      {
        path:'payment',loadChildren:()=>import('../payment/payment.module').then(m=>m.PaymentModule),

      },
      {
        path:'arrive',loadChildren:()=>import('../arrive/arrive.module').then(m=>m.ArriveModule),

      },
      {
        path:'warehouse-filters',loadChildren:()=>import('../warehousef-ilters/warehousef-ilters.module').then(m=>m.WarehousefIltersModule),

      },
      {
        path:'time-filters',loadChildren:()=>import('../timef-ilters/timef-ilters.module').then(m=>m.TimefIltersModule),

      },
      {
        path:'reserved-blocks',loadChildren:()=>import('../reserved-blocks/reserved-blocks.module').then(m=>m.ReservedBlocksModule),

      },{
        path:'capture-history',loadChildren:()=>import('../capture-history/capture-history.module').then(m=>m.CaptureHistoryModule),

      },

      { path: 'home', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: '/dashboard' },
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
