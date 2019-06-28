import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { Message } from 'primeng//api';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PageNotFoundComponent,
    HeroesComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    SplitButtonModule,
    MessageModule,
    MessagesModule,
    DropdownModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
