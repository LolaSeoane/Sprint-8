import { Component, OnInit } from '@angular/core';
import { ShipServiceService } from '../ship-service.service';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})

export class StarshipsComponent implements OnInit {

  constructor(private shipService: ShipServiceService) { }
  ngOnInit(): void {
    this.shipService.getShips()
  }
  get starShipsList() {
    return this.shipService.starShipsList;
  }
}
