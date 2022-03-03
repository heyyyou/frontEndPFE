import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-button-disabled',
  templateUrl: './button-disabled.component.html',
  styleUrls: ['./button-disabled.component.scss'],
})
export class ButtonDisabledComponent implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit(

  ) { this.presentToast() }
  async presentToast() {
    console.log("ledkfnldkf")
    const toast = await this.toastController.create({
      message: 'Demande Avis déja envoyé',
      duration: 2000
    });
    toast.present();
  }
}

