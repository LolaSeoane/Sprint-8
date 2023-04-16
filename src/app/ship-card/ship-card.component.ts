
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ship } from '../interfaces/ship.interface';
import { ShipServiceService } from '../ship-service.service';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.css']
})
export class ShipCardComponent implements OnInit{
id!: any;
ship!:Ship;
public urlImg: string = 'https://starwars-visualguide.com/assets/img/starships';
  constructor(public route:ActivatedRoute, private service:ShipServiceService){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> this.id = params.get('id'));
    setTimeout(()=>{
      this.getShip();
    },1000)
  }
getShip(){
  if(this.id){
    const name = <string>this.id.replace('_',' ');  
    this.service.getSelectedShip(name);
    setTimeout(() => {
      this.ship = this.service.getSelectedShip(name);
      console.log(this.ship);
    }, 1000);
    
  }
}
}
