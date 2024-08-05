import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HouseFormComponent } from './house-form/house-form.component';
import { HouseTableComponent } from './house-table/house-table.component';

@NgModule({
  declarations: [
    HouseFormComponent,
    HouseTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HouseModule { }
