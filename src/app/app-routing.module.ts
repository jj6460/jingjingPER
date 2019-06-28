import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'heroes', component: HeroesComponent},
    {
      path: 'testmodule',
      loadChildren: './testmodule/testmodule.module#TestmoduleModule'
      // loadChildren: () => import('./testmodule/testmodule.module').then(mod => mod.TestmoduleModule)
    },
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
    //     preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
