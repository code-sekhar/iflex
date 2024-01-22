import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservedBlocksComponent } from './reserved-blocks/reserved-blocks.component';

const routes: Routes = [
  {
    path:'',component:ReservedBlocksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservedBlocksRoutingModule { }
