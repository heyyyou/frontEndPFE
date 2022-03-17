import { StarsComponent } from './../rating/stars/stars.component';
import { PhotoService } from './../services/photo.service';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { ConsultationMedService } from '../services/consultation-med.service';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { AlertController, IonContent, LoadingController, ModalController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import { JSXBase } from '@ionic/pwa-elements/dist/types/stencil.core';
interface AlertTextareaAttributes extends JSXBase.TextareaHTMLAttributes<HTMLTextAreaElement> { }


@Component({
  selector: 'app-detail-consultation',
  templateUrl: './detail-consultation.component.html',
  styleUrls: ['./detail-consultation.component.scss'],
})
export class DetailConsultationComponent implements OnInit {

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
  segment = 'droite';
  segmentChanged(ev: any) {


  }

  config: SwiperOptions = {

    slidesPerView: 1.20,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: { clickable: true },


  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Dossier médical en cours de construction',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    this.router.navigate(["home"])
  }


  async DemanderAvis() {
    console.log("???")
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Vous voulez avoir un avis ?',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Saisissez un Commentaire'
        },

      ],
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
