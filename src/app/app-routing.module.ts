import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingComponent } from './building/building.component';

const routes: Routes = [
  { path: '', redirectTo: '/building', pathMatch: 'full' },
  { path: 'building', component: BuildingComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
