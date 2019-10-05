import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { Canvas01Component } from './canvas/canvas01/canvas01.component';
import { Canvas02Component } from './canvas/canvas02/canvas02.component';
import { Canvas03Component } from './canvas/canvas03/canvas03.component';
import { Canvas04Component } from './canvas/canvas04/canvas04.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    Canvas01Component,
    Canvas02Component,
    Canvas03Component,
    Canvas04Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
