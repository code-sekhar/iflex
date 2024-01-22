import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptureHistoryComponent } from './capture-history/capture-history.component';

const routes: Routes = [
  {
    path:'',component:CaptureHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaptureHistoryRoutingModule { }
