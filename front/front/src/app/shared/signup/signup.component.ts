import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, NavController, AlertController, ModalController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  user = {
    email: "",
    password: ""
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Login failed',
      message: 'Please check your credentials',
      buttons: ['OK']
    });

    await alert.present();
  }

  constructor(private menu: MenuController, private route: Router, private alertCtrl: AlertController, public modal: ModalController) { }




  Router: any;
  dismiss() {
    this.modal.dismiss();
  }
  loginUser() {

    console.log(this.user)
    if ((this.user.email == "ss@gmail.com") && (this.user.password == "mariem")) {

      this.route.navigate(['/homeExpert'])

    }
    else if ((this.user.email == "fatma@gmail.com") && (this.user.password == "fatma")) {
      this.route.navigate(['/home'])



    }
    else {

      alert("password or email not valid")

    }


  }








}







