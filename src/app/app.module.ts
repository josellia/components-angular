import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material/material.module';
import { MenuComponent } from './mini-project/menu/menu.component';
import { LayoutComponent } from './mini-project/core/layout/layout.component';
import { ListComponent } from './mini-project/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LayoutComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
