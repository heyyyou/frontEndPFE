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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicRatingModule } from 'ionic-rating';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { GestionAvisComponent } from './medecin-expert/details-consult-avis/details-historiques/gestion-avis.component';
import { DepistageGaucheComponent } from './consultation/depistage-gauche/depistage-gauche.component';
import { DepistageDroiteComponent } from './consultation/depistage-droite/depistage-droite.component';
import { DetailsDroiteComponent } from './consultation/details-droite/details-droite.component';
import { DetailsGaucheComponent } from './detail-consultation/details-gauche/details-gauche.component';
import { ProfilMedcinComponent } from './profil-medcin/profil-medcin.component';
import { EditProfilMedecinComponent } from './edit-profil-medecin/edit-profil-medecin.component';
import { ListeConsultationPerComponent } from './liste-consultation-per/liste-consultation-per.component';
import { Parametre2Component } from './medecin-expert/parametre2/parametre2.component';
import { EditProfilExpertComponent } from './medecin-expert/edit-profil-expert/edit-profil-expert.component';
import { ProfilExpertComponent } from './medecin-expert/profil-expert/profil-expert.component';
import { SplashScreenComponent } from './shared/splash-screen/splash-screen.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './shared/auth-guard';
import { SignupexpertComponent } from './shared/login/signupexpert/signupexpert.component';
import { SignupmedComponent } from './shared/login/signupmed/signupmed.component';
import { ModalDetailsComponent } from './liste-patient/modal-details/modal-details.component';
import { EditPatientComponent } from './liste-patient/edit-patient/edit-patient.component';
import { ModifConsultationComponent } from './modif-consultation/modif-consultation.component';
import { DetailsConsultationwithoutAutoComponent } from './details-consultationwithout-auto/details-consultationwithout-auto.component';
import { AjouterAvisGaucheComponent } from './medecin-expert/ajouter-avis/ajouter-avis-gauche/ajouter-avis-gauche.component';
import { GestionAvisGaucheComponent } from './medecin-expert/details-consult-avis/details-historiques/gestion-avis-gauche/gestion-avis-gauche.component';
import { ConsultationAvisGaucheComponent } from './consultation-avis/consultation-avis-gauche/consultation-avis-gauche.component';
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
    AjouterAvisGaucheComponent,
    ToastComponent,
    SignupComponent,
    LoginComponent,
    GestionAvisGaucheComponent,
    SignupexpertComponent,
    SignupmedComponent,
    ModalDetailsComponent,
    DetailsConsultationwithoutAutoComponent,
    EditPatientComponent,
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
    GestionAvisComponent,
    DepistageGaucheComponent,
    DepistageDroiteComponent,
    DetailsGaucheComponent,
    DetailsDroiteComponent,
    ProfilMedcinComponent,
    EditProfilMedecinComponent,
    ListeConsultationPerComponent,
    Parametre2Component,
    EditProfilExpertComponent,
    ProfilExpertComponent,
    SplashScreenComponent,
    ConsultationAvisGaucheComponent,
    ModifConsultationComponent

  ],
  entryComponents: [],
  imports: [
    IonicStorageModule.forRoot(),

    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicRatingModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicSelectableModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([])
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImagePicker, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,// to which injection token do we want to associate our class with
      useClass: AuthInterceptor,
      multi: true //multiple http interceptor orginized in a chain
    },
    Storage

  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
