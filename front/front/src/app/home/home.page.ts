import { Component } from '@angular/core';

import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public Router: Router) { }
  listeConsultation() {
    this.Router.navigate(["ListeConsultation"])

  }
  listeAvis() {
    this.Router.navigate(["ListeConsultation"]) //filter avis

  }
  patient() {
    this.Router.navigate(["ListePatient"])

  }

}
