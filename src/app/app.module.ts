import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { HomeComponent } from './components/home/home.component';
import { ShipCardComponent } from './components/ship-card/ship-card.component';
import { IdPipe } from './id.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/header/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    HomeComponent,
    ShipCardComponent,
    IdPipe,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
