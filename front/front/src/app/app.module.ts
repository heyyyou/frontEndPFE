
import { ConsultationComponent } from './consultation/consultation.component';
import { PatientComponent } from './patient/patient.component';
import { ModalImageComponent } from './modal-image/modal-image.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { DetailConsultationComponent } from './detail-consultation/detail-consultation.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent, ModalImageComponent, PatientComponent, ConsultationComponent, DetailConsultationComponent],
  entryComponents: [],
  imports: [BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule, IonicSelectableModule, SwiperModule
    , HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ImagePicker],
  bootstrap: [AppComponent],
})
export class AppModule { }
