import { EditProfilExpertComponent } from './medecin-expert/edit-profil-expert/edit-profil-expert.component';
import { ProfilExpertComponent } from './medecin-expert/profil-expert/profil-expert.component';
import { ExpertConsultationComponent } from './medecin-expert/expert-consultation/expert-consultation.component';
import { DetailConsultationComponent } from './detail-consultation/detail-consultation.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { ListeConsultationComponent } from './liste-consultation/liste-consultation.component';
import { ConsultationAvisComponent } from './consultation-avis/consultation-avis.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ToastComponent } from './medecin-expert/toast/toast.component';
import { SignupComponent } from './shared/signup/signup.component';
import { LoginComponent } from './shared/login/login.component';
import { ListeAvisComponent } from './medecin-expert/liste-avis/liste-avis.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ReponseAvisNotifComponent } from './reponse-avis-notif/reponse-avis-notif.component';
import { StarsComponent } from './rating/stars/stars.component';
import { StarsRatingComponent } from './stars-rating/stars-rating.component';
import { HomeExpertComponent } from './medecin-expert/home-expert/home-expert.component';
import { AjouterAvisComponent } from './medecin-expert/ajouter-avis/ajouter-avis.component';
import { ListeConsultExpertComponent } from './medecin-expert/liste-consult-expert/liste-consult-expert.component';
import { DetailsConsultAvisComponent } from './medecin-expert/details-consult-avis/details-consult-avis.component';
import { DepistageGaucheComponent } from './consultation/depistage-gauche/depistage-gauche.component';
import { ProfilMedcinComponent } from './profil-medcin/profil-medcin.component';
import { EditProfilMedecinComponent } from './edit-profil-medecin/edit-profil-medecin.component';
import { ListeConsultationPerComponent } from './liste-consultation-per/liste-consultation-per.component';
import { Parametre2Component } from './medecin-expert/parametre2/parametre2.component';
import { SplashScreenComponent } from './shared/splash-screen/splash-screen.component';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splashScreen',
    pathMatch: 'full'
  },
  { path: 'login', component: SignupComponent },
  { path: 'splashScreen', component: SplashScreenComponent },


  { path: 'signup', component: LoginComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'detailConsultation', component: DetailConsultationComponent },
  { path: 'ListePatient', component: ListePatientComponent },
  { path: 'ListeConsultation', component: ListeConsultationComponent },
  { path: 'consultationAvis', component: ConsultationAvisComponent },
  { path: 'ExpertConsultation', component: ExpertConsultationComponent },
  { path: 'parametre', component: ParametreComponent },
  { path: 'toastExpert', component: ToastComponent },
  { path: 'listeAvis', component: ListeAvisComponent },
  { path: 'statistique', component: StatistiqueComponent },
  { path: 'AvisnonExpert', component: ReponseAvisNotifComponent },
  { path: 'homeExpert', component: HomeExpertComponent },
  { path: 'detailsnotif', component: AjouterAvisComponent },
  {
    path: 'listeConsultExpert', component: ListeConsultExpertComponent
  },
  {
    path: 'DetailsConsultExpert', component: DetailsConsultAvisComponent
  },
  {
    path: 'depistageGauche', component: DepistageGaucheComponent
  },
  {
    path: 'profil', component: ProfilMedcinComponent

  },
  {
    path: 'edit', component: EditProfilMedecinComponent


  },
  {
    path: 'ConsultationPatient', component: ListeConsultationPerComponent



  },
  {
    path: 'parametre2', component: Parametre2Component




  },
  {
    path: 'profilExpert', component: ProfilExpertComponent


  },
  {
    path: 'EditExpert', component: EditProfilExpertComponent


  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
