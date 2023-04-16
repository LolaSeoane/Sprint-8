import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipServiceService } from '../ship-service.service';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})

export class StarshipsComponent implements OnInit {

  constructor(private shipService: ShipServiceService, private router: Router) { }
  
  ngOnInit(): void {
    this.shipService.getShips()
  }
  get starShipsList() {
    return this.shipService.starShipsList;
  }

  goDetails(id:string):void{
    const name = id.replace(' ','_');
    this.router.navigate(['starships',name]);
  }
}
