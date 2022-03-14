import { Component, OnInit } from '@angular/core';

import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { ConsultationMedService } from '../services/consultation-med.service';

import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit() {
  }




  constructor(public Router: Router, private menu: MenuController, public ConsultationMedService: ConsultationMedService) { }
  listeConsultation() {
    this.Router.navigate(["ListeConsultation"])

  }
  listeAvis() {
    this.Router.navigate(["listeAvis"]) //filter avis

  }
  patient() {
    this.Router.navigate(["ListePatient"])

  }
  notificationAvis() {
    this.Router.navigate(["AvisnonExpert"])

  }

}
