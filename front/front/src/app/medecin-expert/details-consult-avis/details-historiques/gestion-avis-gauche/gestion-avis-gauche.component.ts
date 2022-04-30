import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModalImageComponent } from 'src/app/modal-image/modal-image.component';
import { SwiperOptions } from 'swiper';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gestion-avis-gauche',
  templateUrl: './gestion-avis-gauche.component.html',
  styleUrls: ['./gestion-avis-gauche.component.scss'],
})
export class GestionAvisGaucheComponent implements OnInit {
  idConsult: any;
  idavisExpert: any;
  idPatient: any;
  base64Data: any;
  avisExpert: any;
  private sub: any;
  retrieveResponse: any;
  imagePath: any; //string=null;
  idAutoDetection: any
  patient: any
  consultation: any
  images: any[] = [];
  base64 = '';
  constructor(public consultationMedService: ConsultationMedService,
    private router: Router, public loadingController: LoadingController, private modalCtrl: ModalController, private toastController: ToastController,
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

  config: SwiperOptions = {

    slidesPerView: 1.20,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: { clickable: true },


  }
  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idConsult = +params['idConsult'];
      this.idPatient = +params['cin'];
    })
    this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.idPatient).subscribe((params => {
      this.consultation = params;
      console.log(this.consultation)


      if (this.consultation.image1_Gauche == null) {
        this.imagePath = "assets/123.jpg"

      }
      else {

        this.retrieveResponse = this.consultation;
        this.base64Data = this.retrieveResponse.image1_Gauche;
        this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        this.images[0] = this.imagePath;
        console.log("lulaa", this.images[0]);
      }

      if (this.consultation.image2_Gauche == null) {
        this.imagePath = "assets/123.jpg"
      }
      else {

        this.retrieveResponse = this.consultation;
        this.base64Data = this.retrieveResponse.image2_Gauche;
        this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        this.images[1] = this.imagePath;
        console.log("lqqsulaa", this.images[1]);
      }

      if (this.consultation.image3_Gauche == null) {
        this.imagePath = "assets/123.jpg"
      }
      else {

        this.retrieveResponse = this.consultation;
        this.base64Data = this.retrieveResponse.image3_Gauche;
        this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        this.images[2] = this.imagePath;
        console.log("lqqsulaa", this.images[2]);
      }
      if (this.consultation.image4_Gauche == null) {
        this.imagePath = "assets/123.jpg"
      }
      else {

        this.retrieveResponse = this.consultation;
        this.base64Data = this.retrieveResponse.image4_Gauche;
        this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        this.images[3] = this.imagePath;
        console.log("lqqsulaa", this.images[3]);
      }
      if (this.consultation.image5_Gauche == null) {
        this.imagePath = "assets/123.jpg"
      }
      else {

        this.retrieveResponse = this.consultation;
        this.base64Data = this.retrieveResponse.image5_Gauche;
        this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        this.images[4] = this.imagePath;
        console.log("lqqsulaa", this.images[4]);
      }
    })

    )
  }
}
