import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmoduleRoutingModule } from './testmodule-routing.module';
import { Testcom1Component } from './testcom1/testcom1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    TestmoduleRoutingModule
  ],
  declarations: [Testcom1Component, PageNotFoundComponent]
})
export class TestmoduleModule { }
