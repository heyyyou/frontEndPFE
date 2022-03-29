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
import { AuthGuard } from './shared/auth-guard';

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
  { path: 'patient', component: PatientComponent, canActivate: [AuthGuard] },
  { path: 'consultation', component: ConsultationComponent, canActivate: [AuthGuard] },
  { path: 'detailConsultation', component: DetailConsultationComponent, canActivate: [AuthGuard] },
  { path: 'ListePatient', component: ListePatientComponent, canActivate: [AuthGuard] },
  { path: 'ListeConsultation', component: ListeConsultationComponent, canActivate: [AuthGuard] },
  { path: 'consultationAvis', component: ConsultationAvisComponent, canActivate: [AuthGuard] },
  { path: 'ExpertConsultation', component: ExpertConsultationComponent, canActivate: [AuthGuard] },
  { path: 'parametre', component: ParametreComponent, canActivate: [AuthGuard] },
  { path: 'toastExpert', component: ToastComponent, canActivate: [AuthGuard] },
  { path: 'listeAvis', component: ListeAvisComponent, canActivate: [AuthGuard] },
  { path: 'statistique', component: StatistiqueComponent, canActivate: [AuthGuard] },
  { path: 'AvisnonExpert', component: ReponseAvisNotifComponent, canActivate: [AuthGuard] },
  { path: 'homeExpert', component: HomeExpertComponent, canActivate: [AuthGuard] },
  { path: 'detailsnotif', component: AjouterAvisComponent, canActivate: [AuthGuard] },
  {
    path: 'listeConsultExpert', component: ListeConsultExpertComponent, canActivate: [AuthGuard]
  },
  {
    path: 'DetailsConsultExpert', component: DetailsConsultAvisComponent, canActivate: [AuthGuard]
  },
  {
    path: 'depistageGauche', component: DepistageGaucheComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profil', component: ProfilMedcinComponent, canActivate: [AuthGuard]

  },
  {
    path: 'edit', component: EditProfilMedecinComponent, canActivate: [AuthGuard]


  },
  {
    path: 'ConsultationPatient', component: ListeConsultationPerComponent, canActivate: [AuthGuard]



  },
  {
    path: 'parametre2', component: Parametre2Component, canActivate: [AuthGuard]




  },
  {
    path: 'profilExpert', component: ProfilExpertComponent, canActivate: [AuthGuard]


  },
  {
    path: 'EditExpert', component: EditProfilExpertComponent, canActivate: [AuthGuard]


  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
