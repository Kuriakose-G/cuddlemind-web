import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllListComponent } from '../all-list/all-list.component';

const routes: Routes = [
  { path: '', component: AllListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllListRoutingRoutingModule { }
