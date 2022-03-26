import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { ConsultationMedService } from '../services/consultation-med.service';

import { MenuController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit() {
    this.presentToast()
  }



  constructor(public Router: Router, private menu: MenuController, public toastController: ToastController,
    public ConsultationMedService: ConsultationMedService, private test: UserService) { }
  // fetch() {
  //   this.test.fetch().subscribe(data => console.log(data))
  // }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Welcome Doctor' + " " + localStorage.getItem("name"),
      duration: 3000,
      position: 'top',
      cssClass: "customToast"
    });
    toast.present();
  }

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
