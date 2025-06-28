import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTripComponent } from './single-trip/single-trip.component';
import { GoldMultiTripComponent } from './gold-multi-trip/gold-multi-trip.component';



@NgModule({
  declarations: [
    SingleTripComponent,
    GoldMultiTripComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TravelModule { }
