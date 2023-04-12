
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShipServiceService {
  starShipsList: any[] = []
  constructor(private http: HttpClient) { }

  getShips() {
    this.http.get('https://swapi.dev/api/starships')
      .subscribe((resp: any) => {
        console.log(resp.results)
        this.starShipsList = resp.results
      });
  }
}
