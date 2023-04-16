import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ship } from './interfaces/ship.interface';


@Injectable({
  providedIn: 'root'
})
export class ShipServiceService {
  starShipsList: Ship[] = []
  urlNormal='https://swapi.dev/api/starships'
  urlDani = 'https://starpi.herokuapp.com/starpi/starships/1'
  constructor(private http: HttpClient) { }

  getShips() {
    this.http.get(this.urlDani)
      .subscribe((resp: any) => {
        console.log(resp.results)
        this.starShipsList = resp.results
      });
  }
  getSelectedShip(id:string):any{
    if(this.starShipsList.length>=1){
     let shipi = this.starShipsList.find(ship => ship.name == id );
     return shipi;
    }
    else{
      this.getShips();
      setTimeout(() => {
       return this.starShipsList.find(ship => ship.name == id );
       }, 300);
    }
  }
}
