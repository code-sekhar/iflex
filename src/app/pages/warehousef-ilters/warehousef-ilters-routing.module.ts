import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehousefIltersComponent } from './warehousef-ilters/warehousef-ilters.component';

const routes: Routes = [
  {
    path:'',component:WarehousefIltersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousefIltersRoutingModule { }
