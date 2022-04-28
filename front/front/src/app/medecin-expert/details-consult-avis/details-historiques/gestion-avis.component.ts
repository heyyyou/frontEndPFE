import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ModalImageComponent } from 'src/app/modal-image/modal-image.component';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { UserService } from 'src/app/services/user.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-gestion-avis',
  templateUrl: './gestion-avis.component.html',
  styleUrls: ['./gestion-avis.component.scss'],
})
export class GestionAvisComponent implements OnInit {

  @Output() shareRatingValue: EventEmitter<number> = new EventEmitter();
  currentValue: number = null;
  commentaireExpert: any
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
  DemandeAvis: boolean = false; // f details ya mariem demain
  Avis: boolean = false;
  showLoader: boolean;
  text: any

  getValueSelected(value: number) {
    this.shareRatingValue.emit(value);
  }



  constructor(public consultationMedService: ConsultationMedService,
    private router: Router, public loadingController: LoadingController, private modalCtrl: ModalController, private ToastController: ToastController,
    public alertController: AlertController, private route: ActivatedRoute, public service: UserService) { }

  async suppAvis() {


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Êtes-vous sûr de vouloir supprimer votre Avis? ',

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
          //api suppression consultation
          this.router.navigate(['homeExpert']);
        }
      }
      ]


    });


    await alert.present();



  }
  modifAvis() {
    this.router.navigate(['detailsnotif']);

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

  config: SwiperOptions = {

    slidesPerView: 1.20,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: { clickable: true },


  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idConsult = +params['idConsult'];
      this.idPatient = +params['cin'];

      this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.idPatient).subscribe((params => {
        this.consultation = params;
        console.log("ddderrrrrrrrrrrrrrrrrrrrr", this.consultation.autoDetection.avisExpert)
        this.idavisExpert = this.consultation.autoDetection.avisExpert
        console.log(this.idavisExpert)

        console.log("ddsdsdsdsdsdsdsdsdsddddddddddddddddddd")
        if (this.consultation.demanderAvisD !== null && this.consultation.demanderAvisG !== null) {
          this.text = "les deux yeux"
        }
        if (this.consultation.demanderAvisD !== null) {
          this.text = "oeil droite"
        }
        if (this.consultation.demanderAvisG !== null) {
          this.text = "oeil gauche"
        }
        console.log(this.consultation);
        console.log("ddderrrrrrrrrrrrrrrrrrrrr", this.consultation.autoDetection.avisExpert)

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
      })

      )
    })
  }
}
