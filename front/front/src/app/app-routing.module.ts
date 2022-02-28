import { DetailConsultationComponent } from './detail-consultation/detail-consultation.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';

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
  { path: 'ListePatient', component: ListePatientComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
