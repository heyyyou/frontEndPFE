import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonContent, LoadingController, ModalController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { ConsultationMedService } from '../services/consultation-med.service';
import { PhotoService } from '../services/photo.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-consultation-avis',
  templateUrl: './consultation-avis.component.html',
  styleUrls: ['./consultation-avis.component.scss'],
})
export class ConsultationAvisComponent implements OnInit {
  // eli fih button disabled w fih avis expert w expert consultation
  @ViewChild(IonContent) private content: IonContent;

  base64 = '';
  DemandeAvis: boolean = false; // f details ya mariem demain
  Avis: boolean = false;
  showLoader: boolean;
  idConsult: any;
  idPatient: any;
  private sub: any;
  patient: any
  url: any
  images: any[] = [];
  idAutoDetection: any
  consultation: any

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
  segment = 'droite';
  segmentChanged(ev: any) {


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
  what() {

    this.content.scrollToBottom(500);


    console.log("yhees");

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



  constructor(public ConsultationMedService: ConsultationMedService,
    public photoService: PhotoService, private router: Router, public loadingController: LoadingController,
    private modalCtrl: ModalController,
    public alertController: AlertController, private route: ActivatedRoute, public service: UserService) {
  }









  async ngOnInit() {
    this.service.isClicked === 1
    this.route.params.subscribe(params => {
      this.idConsult = +params['idConsult'];
      this.idPatient = +params['cin'];
    })
    console.log("baaaaaa3", this.idPatient);
    console.log("boooooooooooooooooooooooo", this.idConsult);
    this.service.patientID(parseInt(localStorage.getItem("id")), this.idPatient).subscribe((params) => {
      this.patient = params;
      console.log("eeee", params);


      this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.idPatient).subscribe((params => {
        this.consultation = params;
        console.log("meryeù", this.consultation.id)

        // if (this.consultation.image1_Droite === null) {
        //   this.imagePath = "assets/123.jpg"
        // }
        // else {

        //   this.retrieveResponse = this.consultation;
        //   this.base64Data = this.retrieveResponse.image1_Droite;
        //   this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        //   this.images[0] = this.imagePath;
        //   console.log("lulaa", this.images[0]);
        // }

        this.url = "http://localhost:8080/consultation/imageDroite1/" + this.consultation.id;
        console.log("zezezeze", this.url)
        this.images[0] = this.url;



        /*  if (this.consultation.image2_Droite === null) {
            this.imagePath = "assets/123.jpg"
          }
          else {

            this.retrieveResponse = this.consultation;
            this.base64Data = this.retrieveResponse.image2_Droite;
            this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
            this.images[1] = this.imagePath;
            console.log("tableee 2", this.images[1]);
          }


          if (this.consultation.image3_Droite === null) {
            this.imagePath = "assets/123.jpg"
          }
          else {

            this.retrieveResponse = this.consultation;
            this.base64Data = this.retrieveResponse.image3_Droite;
            this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
            this.images[2] = this.imagePath;
            console.log("tableee 2", this.images[2]);
          }


          if (this.consultation.image4_Droite === null) {
            this.imagePath = "assets/123.jpg"
          }
          else {

            this.retrieveResponse = this.consultation;
            this.base64Data = this.retrieveResponse.image4_Droite;
            this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
            this.images[3] = this.imagePath;
            console.log("tableee 2", this.images[3]);
          }

          if (this.consultation.image5_Droite === null) {
            this.imagePath = "assets/123.jpg"
          }
          else {

            this.retrieveResponse = this.consultation;
            this.base64Data = this.retrieveResponse.image5_Droite;
            this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
            this.images[4] = this.imagePath;
            console.log("tableee 2", this.images[4]);
          }*/
      })

      )
    }

    )
  }


  bew() {
    console.log(this.photoService.photos.length);
  }

}

