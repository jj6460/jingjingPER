import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    //   {
    //     enableTracing: false, // <-- debugging purposes only
    //     preloadingStrategy: SelectivePreloadingStrategyService,
    //   }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
