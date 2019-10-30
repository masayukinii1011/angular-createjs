import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { ShapeGenerateComponent } from './shape-generate/shape-generate.component';

const routes: Routes = [
  { path: '', component: TopComponent, data: {animation: 'top'} },
  { path: 'shape-generate', component: ShapeGenerateComponent, data: {animation: 'shapeGenerate'} },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
