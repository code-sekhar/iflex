import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimefIltersComponent } from './timef-ilters/timef-ilters.component';

const routes: Routes = [
  {
    path:'',component:TimefIltersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimefIltersRoutingModule { }
