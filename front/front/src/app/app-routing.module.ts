import { DetailConsultationComponent } from './detail-consultation/detail-consultation.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { ListeConsultationComponent } from './liste-consultation/liste-consultation.component';
import { ConsultationAvisComponent } from './consultation-avis/consultation-avis.component';
import { ExpertConsultationComponent } from './detail-consultation/expert-consultation/expert-consultation.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'patient', component: PatientComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'detailConsultation', component: DetailConsultationComponent },
  { path: 'ListePatient', component: ListePatientComponent },
  { path: 'ListeConsultation', component: ListeConsultationComponent },
  { path: 'consultationAvis', component: ConsultationAvisComponent },
  { path: 'ExpertConsultation', component: ExpertConsultationComponent },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
