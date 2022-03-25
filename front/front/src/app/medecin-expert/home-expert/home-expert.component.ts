import { MenuController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-expert',
  templateUrl: './home-expert.component.html',
  styleUrls: ['./home-expert.component.scss'],
})
export class HomeExpertComponent implements OnInit {
  user: any = {};
  constructor(public router: Router, public menu: MenuController, public toastController: ToastController) { }
  public name = localStorage.getItem("name");

  ngOnInit() {
    this.presentToast();

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Welcome Doctor' + " " + localStorage.getItem("name"),
      duration: 3000,
      position: 'top',
      cssClass: "customToast"
    });
    toast.present();
  }
  logout() {
    this.router.navigate(['login']);
    this.menu.close();
  }
  consultation() {
    this.router.navigate(['listeConsultExpert']);
    this.menu.close();
  }
  notification() {
    this.router.navigate(['homeExpert']);
    this.menu.close();
  }
  parametre() {
    this.router.navigate(['parametre2']);
    this.menu.close();
  }
  profil() {
    this.router.navigate(['profilExpert']);
    this.menu.close();
  }
}
