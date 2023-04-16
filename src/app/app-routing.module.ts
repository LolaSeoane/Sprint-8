import { ShipCardComponent } from './ship-card/ship-card.component';

import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'starships',
    children:[
      {
        path:'',
        component:StarshipsComponent
      },{
        path:':id',
        component:ShipCardComponent
      }
    ]
  },
{
  path:'**',
  redirectTo:'',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
