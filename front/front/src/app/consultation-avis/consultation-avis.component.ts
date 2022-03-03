import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonContent, LoadingController, ModalController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import { ConsultationMedService } from '../services/consultation-med.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-consultation-avis',
  templateUrl: './consultation-avis.component.html',
  styleUrls: ['./consultation-avis.component.scss'],
})
export class ConsultationAvisComponent implements OnInit {

  @ViewChild(IonContent) private content: IonContent;

  base64 = '';
  DemandeAvis: boolean = false; // f details ya mariem demain
  Avis: boolean = false;
  showLoader: boolean;

  displayProgress() {
    this.showLoader = true;

  }
  // async routerHome() {
  //   return await this.router.navigate(['home']);
  // }

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
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Dossier médical en cours de construction',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    this.router.navigate(["ListeConsultation"])
  }


  async DemanderAvis() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Vous voulez avoir un avis ?',
      subHeader: 'Expert en ophtalmologie',
      message: '',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log("dismiss")
        }
      },
      {
        text: 'Valider',
        handler: () => {
          // this.DemandeAvis = true;
          // this.Avis = false;
          this.presentLoading();
        }
      }
      ]


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

