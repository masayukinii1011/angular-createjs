import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { Canvas01Component } from './canvas/canvas01/canvas01.component';
import { Canvas02Component } from './canvas/canvas02/canvas02.component';
import { Canvas03Component } from './canvas/canvas03/canvas03.component';
import { Canvas04Component } from './canvas/canvas04/canvas04.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'canvas01', component: Canvas01Component },
  { path: 'canvas02', component: Canvas02Component },
  { path: 'canvas03', component: Canvas03Component },
  { path: 'canvas04', component: Canvas04Component },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
