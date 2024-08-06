import { Component } from '@angular/core';

import { DB } from '../../shared/db';

@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html',
  styleUrl: './house-table.component.css'
})
export class HouseTableComponent {
  dataSource = DB.getHouses();
  displayedColumns: string[] = ['houseName', 'sizeInSquareMeter', 'rooms', 'bathrooms', 'price', 'actions'];

  public deleteHouse(id: number): void {
    DB.removeHouse(id);
    this.dataSource = DB.getHouses();
  }
}
