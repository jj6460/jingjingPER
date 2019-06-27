import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Testcom1Component } from './testcom1/testcom1.component';

const routes: Routes = [
  {
    path: '',
    component: Testcom1Component,
    children: [
      { path: '', component: Testcom1Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestmoduleRoutingModule { }
