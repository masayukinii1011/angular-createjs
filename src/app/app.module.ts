import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { ShapeGenerateComponent } from './canvas/shape-generate/shape-generate.component';
import { Canvas01Component } from './canvas/canvas01/canvas01.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ShapeGenerateComponent,
    Canvas01Component,
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
