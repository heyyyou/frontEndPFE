import { ConsultationComponent } from './../consultation/consultation.component';
import { Router } from '@angular/router';
import { PhotoService } from './../services/photo.service';
import { ConsultationMedService } from './../services/consultation-med.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-consultation',
  templateUrl: './liste-consultation.component.html',
  styleUrls: ['./liste-consultation.component.scss'],
})
export class ListeConsultationComponent implements OnInit {
  public avisExpert;
  constructor(public ConsultationMedService: ConsultationMedService, public PhotoService: PhotoService, public router: Router) { }

  newConsultation() {
    this.router.navigate(["consultation"])
  }
  ngOnInit() {


  }
  openDetail() {
    this.router.navigate(["consultationAvis"])
  }

}
