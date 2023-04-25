import { AuthGuard } from './components/guards/auth.guard';
import { ShipCardComponent } from './components/ship-card/ship-card.component';

import { HomeComponent } from './components/home/home.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './components/starships/starships.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'starships',
    children: [
      {
        path: '',
        component: StarshipsComponent,
        canActivate:[AuthGuard]
      }, {
        path: ':id',
        component: ShipCardComponent,
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
