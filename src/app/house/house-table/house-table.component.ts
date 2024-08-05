import { Component } from '@angular/core';
import { HOUSES } from '../../db';

@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html',
  styleUrl: './house-table.component.css'
})
export class HouseTableComponent {
  dataSource = HOUSES;
  displayedColumns: string[] = ['houseName', 'sizeInSquareMeter', 'rooms', 'bathrooms', 'price', 'actions'];
}
