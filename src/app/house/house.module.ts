import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseFormComponent } from './house-form/house-form.component';
import { HouseTableComponent } from './house-table/house-table.component';

@NgModule({
  declarations: [
    HouseFormComponent,
    HouseTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HouseModule { }
