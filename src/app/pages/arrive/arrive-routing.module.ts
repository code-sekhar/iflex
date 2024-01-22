import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArriveComponent } from './arrive/arrive.component';

const routes: Routes = [
  {
    path:'',component:ArriveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArriveRoutingModule { }
