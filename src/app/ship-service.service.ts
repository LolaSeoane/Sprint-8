
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ship } from './interfaces/ship.interface';



@Injectable({
  providedIn: 'root'
})
export class ShipServiceService {
  starShipsList: Ship[] = [];
  currentPage = 1;
  shipsPerPage = 10;
  totalShips = 0;
  urlNormal = 'https://swapi.dev/api/starships/';
  urlDani = 'https://starpi.herokuapp.com/starpi/starships/';

  constructor(private http: HttpClient) { }

  getShips(number:number) {
    this.http.get(this.urlDani+number)
      .subscribe((resp: any) => {
        console.log(resp.results);
        this.starShipsList = resp.results;
        this.totalShips = resp.count;
      });
  }

  getSelectedShip(id: string): any {
    if (this.starShipsList.length >= 1) {
      const ship = this.starShipsList.find(ship => ship.name == id );
      return ship;
    } else {
      this.getShips(this.currentPage);
      setTimeout(() => {
        return this.starShipsList.find(ship => ship.name == id );
      }, 300);
    }
  }

  getImgShip(id: number) {
    return this.http.get<Ship>(`${this.urlNormal}${id}/`);
  }
  getShipsByPage(page: number){
    const url = this.urlDani+page;
   this.http.get(url).subscribe((resp: any) => {
    console.log(resp.results);
    resp.results.forEach((element: Ship) => {
      this.starShipsList.push(element)
    });
     // this.starShipsList += resp.results;
      console.log(this.starShipsList);
    });
  }
}



