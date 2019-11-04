import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { ShapeGenerateComponent } from './shape-generate/shape-generate.component';
import { ButtonComponent } from './button/button.component';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { CanvasComponent } from './canvas/canvas.component';
import { AbcComponent } from './abc/abc.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ShapeGenerateComponent,
    ButtonComponent,
    ButtonContainerComponent,
    CanvasComponent,
    AbcComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
