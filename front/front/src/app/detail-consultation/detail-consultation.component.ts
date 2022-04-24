import { Patient } from './../model/patient';
import { StarsComponent } from './../rating/stars/stars.component';
import { PhotoService } from './../services/photo.service';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { ConsultationMedService } from '../services/consultation-med.service';
import { ActivatedRoute, ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { AlertController, IonContent, LoadingController, ModalController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import { JSXBase } from '@ionic/pwa-elements/dist/types/stencil.core';
import { UserService } from '../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalImageComponent } from '../modal-image/modal-image.component';
interface AlertTextareaAttributes extends JSXBase.TextareaHTMLAttributes<HTMLTextAreaElement> { }


@Component({
  selector: 'app-detail-consultation',
  templateUrl: './detail-consultation.component.html',
  styleUrls: ['./detail-consultation.component.scss'],
})
export class DetailConsultationComponent implements OnInit {

  @ViewChild(IonContent) private content: IonContent;
  idConsult: any;
  idPatient: any;
  private sub: any;
  patient: any
  consultation: any
  images: any[] = [];
  idAutoDetection: any
  retrieveResponse: any;
  retrieveResponse2: any
  imagePath: any; //string=null;
  imagePath1: any; //string=null;



  base64Data: any;
  base64Data2: any;

  base64 = '';
  DemandeAvis: boolean = false; // f details ya mariem demain
  Avis: boolean = false;
  showLoader: boolean;
  disableButton = true;

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
    this.disableButton = true;

    const { role, data } = await loading.onDidDismiss();

    // this.router.navigate(["home"])
  }
  hey() {
    this.disableButton = true;

  }
  async DemanderAvis() {
    console.log("???")
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
    public alertController: AlertController, private route: ActivatedRoute, public service: UserService, private sanitizer: DomSanitizer) {
  }





  async openPreview(imge) {
    const modal = await this.modalCtrl.create({
      component: ModalImageComponent,
      componentProps: {
        imge
      },
      cssClass: 'transparent-modal'
    });
    modal.present();

  }



  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idConsult = +params['id'];
      this.idPatient = +params['idp'];
      this.idAutoDetection = +params['idA']
      this.service.patientID(parseInt(localStorage.getItem("id")), this.idPatient).subscribe((params) => {
        this.patient = params;
        console.log(params);
      })
    })
    // this.service.updateIdAutoDetection(parseInt(localStorage.getItem("id")), this.idConsult, this.idAutoDetection).subscribe(event => { })

    this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.idPatient).subscribe((params => {
      this.consultation = params;
      console.log(this.consultation)
      if (this.consultation.image1_Droite == null) {
        this.imagePath = "assets/123.jpg"

      }
      else {

        this.retrieveResponse = this.consultation;
        this.base64Data = this.retrieveResponse.image1_Droite;
        this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        this.images[0] = this.imagePath;
        console.log("lulaa", this.images[0]);
      }

      if (this.consultation.image2_Droite == null) {
        this.imagePath = "assets/123.jpg"
      }
      else {

        this.retrieveResponse = this.consultation;
        this.base64Data = this.retrieveResponse.image2_Droite;
        this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        this.images[1] = this.imagePath;
        console.log("lqqsulaa", this.images[1]);
      }

      if (this.consultation.image3_Droite == null) {
        this.imagePath = "assets/123.jpg"
      }
      else {

        this.retrieveResponse = this.consultation;
        this.base64Data = this.retrieveResponse.image3_Droite;
        this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        this.images[2] = this.imagePath;
        console.log("lqqsulaa", this.images[2]);
      }
      if (this.consultation.image4_Droite == null) {
        this.imagePath = "assets/123.jpg"
      }
      else {

        this.retrieveResponse = this.consultation;
        this.base64Data = this.retrieveResponse.image4_Droite;
        this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        this.images[3] = this.imagePath;
        console.log("lqqsulaa", this.images[3]);
      }
      if (this.consultation.image5_Droite == null) {
        this.imagePath = "assets/123.jpg"
      }
      else {

        this.retrieveResponse = this.consultation;
        this.base64Data = this.retrieveResponse.image5_Droite;
        this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        this.images[4] = this.imagePath;
        console.log("lqqsulaa", this.images[4]);
      }

    }

    )
    )
  }

}


