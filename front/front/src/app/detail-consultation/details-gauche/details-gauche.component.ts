import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonContent, LoadingController, ModalController } from '@ionic/angular';
import { ModalImageComponent } from 'src/app/modal-image/modal-image.component';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-details-gauche',
  templateUrl: './details-gauche.component.html',
  styleUrls: ['./details-gauche.component.scss'],
})
export class DetailsGaucheComponent implements OnInit {

  @ViewChild(IonContent) private content: IonContent;
  url: string = "http://localhost:8080/consultation/imageGauche1/";
  idConsult: any;
  idPatient: any;
  private sub: any;
  patient: any
  base64 = '';
  images2: any[] = [];
  idAutoDetection: any
  consultation: any

  DemandeAvis: boolean = false; // f details ya mariem demain
  Avis: boolean = false;
  showLoader: boolean;
  retrieveResponse: any
  imagePath: any; //string=null;
  base64Data: any;

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

    this.service.updateAutoDetectionInConsultation(parseInt(localStorage.getItem("id")), this.idConsult, this.idAutoDetection).subscribe((params) => {
      this.consultation = params, this.idConsult = this.consultation.id
      this.service.demanderAvisG(parseInt(localStorage.getItem("id")), this.idConsult).subscribe((params) => { this.consultation = params, console.log("qsdqsdqsdqsdcvvbbbbbb", this.consultation) })

    })


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



  constructor(public ConsultationMedService: ConsultationMedService,
    public photoService: PhotoService, private router: Router, public loadingController: LoadingController,
    private modalCtrl: ModalController,
    public alertController: AlertController, private route: ActivatedRoute, public service: UserService) {
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

      console.log("baaaaaa3", this.idPatient);
      console.log("boooooooooooooooooooooooo", this.idConsult);
      this.service.patientID(parseInt(localStorage.getItem("id")), this.idPatient).subscribe((params) => {
        this.patient = params;
        console.log(params);
      })
    })
    this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.idPatient).subscribe((params => {
      this.consultation = params;
      console.log(this.consultation)
      this.url = this.url + this.consultation.id;
      this.images2[0] = this.url;
      // if (this.consultation.image1_Gauche == null) {
      //   this.imagePath = "assets/123.jpg"
      // }
      // else {
      //   console.log("be333");

      //   this.retrieveResponse = this.consultation;
      //   this.base64Data = this.retrieveResponse.image1_Gauche;
      //   this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
      //   this.images2[0] = this.imagePath;
      //   console.log("lulaa", this.images2[0]);
      // }



      /*  if (this.consultation.image2_Gauche === null) {
          this.imagePath = "assets/123.jpg"
        }
        else {

          this.retrieveResponse = this.consultation;
          this.base64Data = this.retrieveResponse.image2_Gauche;
          this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
          this.images2[1] = this.imagePath;
          console.log("tableee 2", this.images2[1]);
        }


        if (this.consultation.image3_Gauche === null) {
          this.imagePath = "assets/123.jpg"
        }
        else {

          this.retrieveResponse = this.consultation;
          this.base64Data = this.retrieveResponse.image3_Gauche;
          this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
          this.images2[2] = this.imagePath;
          console.log("tableee 2", this.images2[2]);
        }


        if (this.consultation.image4_Gauche === null) {
          this.imagePath = "assets/123.jpg"
        }
        else {

          this.retrieveResponse = this.consultation;
          this.base64Data = this.retrieveResponse.image4_Gauche;
          this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
          this.images2[3] = this.imagePath;
          console.log("tableee 2", this.images2[3]);
        }

        if (this.consultation.image5_Gauche === null) {
          this.imagePath = "assets/123.jpg"
        }
        else {

          this.retrieveResponse = this.consultation;
          this.base64Data = this.retrieveResponse.image5_Gauche;
          this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
          this.images2[4] = this.imagePath;
          console.log("tableee 2", this.images2[4]);
        }*/
    })

    )
  }

  bew() {
    console.log(this.photoService.photos.length);
  }

}
