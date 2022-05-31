import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonContent, LoadingController, ModalController } from '@ionic/angular';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { PhotoService } from 'src/app/services/photo.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-details-consult-avis',
  templateUrl: './details-consult-avis.component.html',
  styleUrls: ['./details-consult-avis.component.scss'],
})
export class DetailsConsultAvisComponent implements OnInit {


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
  droite() {

  }
  gauche() {

  }







  constructor(public consultationMedService: ConsultationMedService, public photoService: PhotoService,
    private router: Router, public loadingController: LoadingController, private modalCtrl: ModalController,
    public alertController: AlertController) {
  }









  async ngOnInit() {
    await this.photoService.loadSaved();


  }

}


