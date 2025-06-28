import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxProtectComponent } from './max-protect/max-protect.component';
import { PersonalProtectComponent } from './personal-protect/personal-protect.component';



@NgModule({
  declarations: [
    MaxProtectComponent,
    PersonalProtectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HealthModule { }
