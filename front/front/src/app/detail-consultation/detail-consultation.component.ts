import { PhotoService } from './../services/photo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { ConsultationMedService } from '../services/consultation-med.service';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-detail-consultation',
  templateUrl: './detail-consultation.component.html',
  styleUrls: ['./detail-consultation.component.scss'],
})
export class DetailConsultationComponent implements OnInit {
  base64 = '';

  myDate: String = new Date().toLocaleDateString();




  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  segment = 'all';
  segmentChanged(ev: any) {


  }

  config: SwiperOptions = {

    slidesPerView: 1.20,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: { clickable: true },


  }
  droite() {

  }
  gauche() {

  }
  async envoyerdossier() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Vous voulez avoir un avis ?',
      subHeader: 'Expert en ophtalmologie',
      message: '',
      buttons: ['Cancel', 'OK']
    });


    await alert.present();



  }



  constructor(public ConsultationMedService: ConsultationMedService, public photoService: PhotoService, private router: Router, public loadingController: LoadingController, private modalCtrl: ModalController,
    public alertController: AlertController) {
  }









  async ngOnInit() {
    await this.photoService.loadSaved();

  }
  bew() {
    console.log(this.photoService.photos.length);
  }

}
