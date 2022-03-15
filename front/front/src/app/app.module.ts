import { SharedModule } from './shared/shared.module';
// import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HomeExpertComponent } from './medecin-expert/home-expert/home-expert.component';
import { HomePage } from './home/home.page';
import { ListeConsultationComponent } from './liste-consultation/liste-consultation.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { PatientComponent } from './patient/patient.component';
import { ModalImageComponent } from './modal-image/modal-image.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { AvisExpertComponent } from './avis-expert/avis-expert.component';
import { ConsultationAvisComponent } from './consultation-avis/consultation-avis.component';
import { ExpertConsultationComponent } from './medecin-expert/expert-consultation/expert-consultation.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ToastComponent } from './medecin-expert/toast/toast.component';
import { SignupComponent } from './shared/signup/signup.component';
import { LoginComponent } from './shared/login/login.component';
import { ListeAvisComponent } from './medecin-expert/liste-avis/liste-avis.component';
import { ReponseAvisNotifComponent } from './reponse-avis-notif/reponse-avis-notif.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { StarsRatingComponent } from './stars-rating/stars-rating.component';
import { StatPatientComponent } from './statistique/stat-patient/stat-patient.component';
import { StatConsultComponent } from './statistique/stat-consult/stat-consult.component';
import { StatAvisComponent } from './statistique/stat-avis/stat-avis.component';
import { AjouterAvisComponent } from './medecin-expert/ajouter-avis/ajouter-avis.component';
import { ListeConsultExpertComponent } from './medecin-expert/liste-consult-expert/liste-consult-expert.component';
import { DetailsConsultAvisComponent } from './medecin-expert/details-consult-avis/details-consult-avis.component';
import { GestionAvisComponent } from './medecin-expert/details-consult-avis/gestion-avis/gestion-avis.component';

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
    StatConsultComponent,
    HomePage,
    HomeExpertComponent,
    AjouterAvisComponent,
    ListeConsultExpertComponent,
    DetailsConsultAvisComponent,
    GestionAvisComponent
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
    SharedModule,
    RouterModule.forRoot([])
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImagePicker,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
