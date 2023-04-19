import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsComponent } from './starships/starships.component';
import { HomeComponent } from './home/home.component';
import { ShipCardComponent } from './ship-card/ship-card.component';
import { IdPipe } from './id.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    HomeComponent,
    ShipCardComponent,
    IdPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
