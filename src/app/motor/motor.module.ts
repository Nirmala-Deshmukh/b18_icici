import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarIncComponent } from './car-inc/car-inc.component';
import { BikeIncComponent } from './bike-inc/bike-inc.component';



@NgModule({
  declarations: [
    CarIncComponent,
    BikeIncComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MotorModule { }
