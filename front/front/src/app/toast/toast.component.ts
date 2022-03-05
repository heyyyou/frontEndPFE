import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {

  constructor(public toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Un Expert a déja mentionné son avis , merci pour votre compréhension.',
      duration: 5000
    });
    toast.present();
  }

  ngOnInit() {
    this.presentToast();
  }

}
