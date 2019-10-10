import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { ShapeGenerateComponent } from './canvas/shape-generate/shape-generate.component';
import { Canvas01Component } from './canvas/canvas01/canvas01.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'shape-generate', component: ShapeGenerateComponent },
  { path: 'canvas01', component: Canvas01Component },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
