import { SharedModule } from './../shared/shared.module';
import { HomeExpertComponent } from './home-expert/home-expert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedecinExpertRoutingModule } from './medecin-expert-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MedecinExpertRoutingModule,
    SharedModule
  ]
})
export class MedecinExpertModule { }
