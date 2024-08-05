import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HOUSES } from '../../db';
import { House } from '../../models/House';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrl: './house-form.component.css'
})
export class HouseFormComponent {
  public houseName: string = ''
  public size: string = ''
  public rooms: string = ''
  public bathrooms: string = ''

  constructor(private _snackBar: MatSnackBar) {}

  public registerNewHouse(): void {
    const newHouse = new House(
      this.houseName,
      Number(this.size),
      Number(this.rooms),
      Number(this.bathrooms)
    )

    HOUSES.push(newHouse);

    this.clearInputs();
    this.openSnackBar();
  }

  private openSnackBar(): void {
    this._snackBar.open('Casa cadastrada com sucesso!', 'Ok', {
      duration: 3000
    });
  }

  private clearInputs(): void {
    this.houseName = ''
    this.size = ''
    this.rooms = ''
    this.bathrooms = ''
  }
}
