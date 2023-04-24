
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipServiceService } from '../services/ship-service.service';
import { Ship } from '../../interfaces/ship.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starShipsList: Ship[] = [];
  currentPage = 1;
  shipsPerPage = 10;
  totalShips = 36;

  constructor(private shipService: ShipServiceService, private router: Router) { }

  ngOnInit(): void {
    this.shipService.getShips(this.currentPage);
    setTimeout(() => {
      this.starShipsList = this.shipService.starShipsList.slice(0, this.shipsPerPage);
    }, 500);
  }

  goDetails(id: string): void {
    const name = id.replace(' ', '_');
    this.router.navigate(['starships', name]);
  }

  loadMore(): void {
    this.currentPage++;
    this.shipService.getShipsByPage(this.currentPage)
    setTimeout(() => {
      this.starShipsList = this.shipService.starShipsList
      console.log(this.starShipsList);
    }, 700);
  }
}

