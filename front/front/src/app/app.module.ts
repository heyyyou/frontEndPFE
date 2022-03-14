import { HomePage } from './home/home.page';
import { ListeConsultationComponent } from './liste-consultation/liste-consultation.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { PatientComponent } from './patient/patient.component';
import { ModalImageComponent } from './modal-image/modal-image.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonicRatingModule } from 'ionic-rating';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { DetailConsultationComponent } from './detail-consultation/detail-consultation.component';
import { CommonModule } from '@angular/common';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { LoadingAIComponent } from './consultation/loading-ai/loading-ai.component';
import { AvisExpertComponent } from './detail-consultation/avis_expert/avis-expert/avis-expert.component';
import { ConsultationAvisComponent } from './consultation-avis/consultation-avis.component';
import { ExpertConsultationComponent } from './detail-consultation/expert-consultation/expert-consultation.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ToastComponent } from './toast/toast.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ListeAvisComponent } from './liste-avis/liste-avis.component';
import { ReponseAvisNotifComponent } from './reponse-avis-notif/reponse-avis-notif.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { StarsRatingComponent } from './stars-rating/stars-rating.component';
import { StatPatientComponent } from './statistique/stat-patient/stat-patient.component';
import { StatConsultComponent } from './statistique/stat-consult/stat-consult.component';
import { StatAvisComponent } from './statistique/stat-avis/stat-avis.component';
@NgModule({
  declarations: [
    ReponseAvisNotifComponent,
    LoadingAIComponent,
    AppComponent,
    ModalImageComponent,
    PatientComponent,
    ConsultationComponent,
    DetailConsultationComponent,
    ListePatientComponent,
    ListeConsultationComponent,
    AvisExpertComponent,
    ConsultationAvisComponent,
    ExpertConsultationComponent,
    ParametreComponent,
    ToastComponent,
    SignupComponent,
    LoginComponent,
    ListeAvisComponent,
    StatistiqueComponent,
    StarsRatingComponent,
    StatPatientComponent,
    StatAvisComponent,

    StatConsultComponent, HomePage,





  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    IonicRatingModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    IonicSelectableModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImagePicker,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
