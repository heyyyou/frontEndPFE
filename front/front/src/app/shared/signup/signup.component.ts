import { Component, ContentChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, NavController, AlertController, ModalController, ToastController, IonInput } from '@ionic/angular';
import { Button } from 'protractor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {


  user: any = {};

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

  constructor(private menu: MenuController, private route: Router, public toastController: ToastController,
    private alertCtrl: AlertController, public modal: ModalController,
    private service: UserService) { }





  ngOnInit() {
    this.service.islogin = false;
    this.service.generaliste = false;
    this.service.expert = false;
  }
  Router: any;
  dismiss() {
    this.modal.dismiss();
  }
  login(f1: NgForm) {
    this.service.login(f1.value.username, f1.value.password).subscribe(
      res => {
        this.user = res;
        localStorage.setItem("name", this.user.username);
        localStorage.setItem("role", this.user.role);
        localStorage.setItem("email", this.user.email);


        let accessToken = "Bearer " + this.user.accessToken;
        localStorage.setItem("token", accessToken)
        // when we do login token in jwt mtaa user

        this.service.islogin = true;
        if (this.user.role == "generaliste") {
          this.service.generaliste = true;
          this.route.navigate(['/home']);
        }
        else {
          this.service.expert = true;

          this.route.navigate(['/homeExpert']);
        }
      },
      error =>

        this.presentToast()


    );
  }



  logOut() {
    localStorage.removeItem("username");
  }



  async presentToast() {
    const toast = await this.toastController.create({
      message: 'données incorrectes',
      cssClass: "customToaste",

      duration: 2000
    });
    toast.present();
  }
}
















