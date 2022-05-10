import { AjouterAvisGaucheComponent } from './ajouter-avis-gauche/ajouter-avis-gauche.component';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonContent, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ModalImageComponent } from 'src/app/modal-image/modal-image.component';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-ajouter-avis',
  templateUrl: './ajouter-avis.component.html',
  styleUrls: ['./ajouter-avis.component.scss'],
})
export class AjouterAvisComponent implements OnInit {

  @ViewChild(IonContent) private content: IonContent;
  idConsult: any;
  idavisExpert: any;
  idPatient: any;
  base64Data: any;
  avisExpert: any;
  currentRatingValue: number = null;

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
  Saine: any
  displayProgress() {
    this.showLoader = true;

  }
  showRating(rating) {
    this.currentRatingValue = (rating);

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
  what() {

    this.content.scrollToBottom(500);


    console.log("yhees");

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



  constructor(public consultationMedService: ConsultationMedService, public photoService: PhotoService,
    private router: Router, public loadingController: LoadingController, private modalCtrl: ModalController, private ToastController: ToastController,
    public alertController: AlertController, private toastController: ToastController, private route: ActivatedRoute, public service: UserService) {
  }









  async ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.idConsult = +params['idConsult'];
      this.idPatient = +params['cin'];

      this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.idPatient).subscribe((params => {
        this.consultation = params;
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
        if (this.consultation?.autoDetection?.avisExpert?.maladieDroite === null) {
          this.consl();
        }

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



  bew() {
    console.log(this.photoService.photos.length);
  }
  public selected_maladie = null

  public choixMaladie = null
  public disableButton = false;

  truthClick(f: NgForm) {
    this.sub = this.route.params.subscribe(params => {
      this.idConsult = +params['idConsult'];
      this.idPatient = +params['cin'];

      this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.idPatient).subscribe((params => {
        this.consultation = params;
        console.log("ddderrrrrrrrrrrrrrrrrrrrr", this.consultation.autoDetection.avisExpert)
        this.idavisExpert = this.consultation.autoDetection.avisExpert
        console.log(this.idavisExpert)

        console.log("ddsdsdsdsdsdsdsdsdsddddddddddddddddddd")
        if (this.idavisExpert === null) {
          console.log("fdfdfgdfg")
          this.service.ajouterAvisExpertTableMtaou(parseInt(localStorage.getItem("id"))).subscribe((params) => {
            // ajout att kol null
            console.log("laaaaaaaaaaa")
            this.avisExpert = params
            this.idavisExpert = this.avisExpert.id

            console.log("ezez", this.idavisExpert)
            //update ken droite

            this.service.ajouterAvisOeilDroite(this.idavisExpert, f.value).subscribe((params) => {
              this.avisExpert = params;
              this.idavisExpert = this.avisExpert.id

              this.service.updateIdAvisExpertDansAutoDetection(this.consultation.autoDetection.id, this.idConsult, this.idavisExpert).subscribe(() => { console.log("eyyyyyy") })
              this.presentToastWithOptions()
            })

          })

        }


        else {

          this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.idPatient).subscribe((params => {
            this.consultation = params;
            console.log("ddd", this.consultation.autoDetection.avisExpert)
            this.idavisExpert = this.consultation.autoDetection.avisExpert.id
            this.idAutoDetection = this.consultation.autoDetection.id

            this.service.ajouterAvisOeilDroite(this.idavisExpert, f.value).subscribe(() =>
              this.service.updateIdAvisExpertDansAutoDetection(this.idAutoDetection, this.idConsult, this.idavisExpert).subscribe(() => { console.log("eyyyyyy") })

            )
            this.presentToastWithOptions();
          }
          )
          )
        }
      })
      )
    })
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Avis ajouté avec succées',
      icon: 'information-circle',
      position: 'top',
      color: "light",
      duration: 2000


    });
    await toast.present();
  }
  async consl() {
    const toast = await this.toastController.create({
      message: 'Avis déja ajouté',
      icon: 'information-circle',
      color: "danger",
      duration: 2000


    });
    await toast.present();
  }

  public gravite = [
    {
      id: 0,
      valeur: 0
    },
    {
      id: 1,
      valeur: 1
    },
    {
      id: 2,
      valeur: 2
    },
    {
      id: 3,
      valeur: 3
    }

  ]
  public maladie = [{


    id: 0,
    nom: "diabète",
    value: "diab",


  }, {
    id: 1,
    nom: "rhétino",
    value: "rhét"
  }, {
    id: 2,
    nom: "surtension",
    value: "surt"
  },
  {
    id: 3,
    nom: "saine",
    value: "saine"
  },

  ]
  choose() {
    this.choixMaladie = this.selected_maladie.nom;
    console.log(this.selected_maladie.nom);

  }
  // change(event) {
  //   this.Saine = event.detail;
  //   console.log("eeeeeeeeeeeeeeeeeeeee", this.Saine)

  // }

  @Output() shareRatingValue: EventEmitter<number> = new EventEmitter();
  currentValue: number = null;

  getValueSelected(value: number) {
    this.shareRatingValue.emit(value);
  }
  envoyerRating() {
    this.service.Rate(this.currentRatingValue, this.idConsult).subscribe((params => {
      this.ngOnInit();
      this.dismiss()
    }))

  }




  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this.presentToast()

  }
  Valider() {
    //ici je vais valider forms apres dismiss model stars
    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }

  async presentToast() {
    const toast = await this.ToastController.create({
      message: 'votre Avis a été envoyé avec succès ',
      duration: 6000
    });
    toast.present();
    this.router.navigate(["listeConsultExpert"]) //redirect to the current  consultation(filter ) eli hia f liste



  }



}




