import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmoduleRoutingModule } from './testmodule-routing.module';
import { Testcom1Component } from './testcom1/testcom1.component';

@NgModule({
  imports: [
    CommonModule,
    TestmoduleRoutingModule
  ],
  declarations: [Testcom1Component]
})
export class TestmoduleModule { }
