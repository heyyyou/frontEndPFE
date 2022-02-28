import { ConsultationMedService } from './../services/consultation-med.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss'],
})
export class ListePatientComponent implements OnInit {

  constructor(public ConsultationMedService: ConsultationMedService) { }

  ngOnInit() { }

}
