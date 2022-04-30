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
  selector: 'app-ajouter-avis-gauche',
  templateUrl: './ajouter-avis-gauche.component.html',
  styleUrls: ['./ajouter-avis-gauche.component.scss'],
})
export class AjouterAvisGaucheComponent implements OnInit {


  @ViewChild(IonContent) private content: IonContent;
  idConsult: any;
  idPatient: any;
  base64Data: any;
  idavisExpert: any
  private sub: any;
  retrieveResponse: any
  imagePath: any; //string=null;
  avisExpert: any
  patient: any
  idAutoDetection: any
  consultation: any
  Saine: any = false;
  maladieDisabled: any = false
  graviteDisabled: any = false
  images: any[] = [];
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
  change(event) {
    this.Saine = event.detail;
    console.log("eeeeeeeeeeeeeeeeeeeee", this.Saine)
    this.maladieDisabled = true;

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
    public alertController: AlertController, private route: ActivatedRoute, public service: UserService, private toastController: ToastController) {
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


  bew() {
    console.log(this.photoService.photos.length);
  }
  public selected_maladie = null

  public choixMaladie = null
  public disableButton = false;

  // truthClick() {






  //   this.disableButton = true;
  // }
  truthClick(f: NgForm) {
    this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.idPatient).subscribe((params => {
      this.consultation = params;
      console.log("ddd", this.consultation.autoDetection.avisExpert)
      this.idavisExpert = this.consultation.autoDetection.avisExpert
      console.log(this.idavisExpert)


      if (this.idavisExpert === null) {
        this.service.ajouterAvisExpertTableMtaou(parseInt(localStorage.getItem("id"))).subscribe((params) => {
          // ajout att kol null
          console.log("laaaaaaaaaaa")
          this.avisExpert = params
          this.idavisExpert = this.avisExpert.id
          console.log("bagra", this.service.idAvisExpert);


          //update ken gauche

          this.service.ajouterAvisOeilGauche(this.idavisExpert, f.value).subscribe((params) => {
            this.avisExpert = params;
            this.idavisExpert = this.avisExpert.id

            this.service.updateIdAvisExpertDansAutoDetection(this.consultation.autoDetection.id, this.idConsult, this.idavisExpert).subscribe(() => { console.log("eyyyyyy") })
            this.presentToastWithOptions()
          })

        })

      }


      else {
        console.log("errors", this.idConsult)
        console.log("here", this.idPatient)
        this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.idPatient).subscribe((params => {
          this.consultation = params;
          console.log("ddd", this.consultation.autoDetection.avisExpert)
          this.idavisExpert = this.consultation.autoDetection.avisExpert.id
          this.idAutoDetection = this.consultation.autoDetection.id
          console.log("woidsdqsdqsdqsd", this.idavisExpert)
          this.service.ajouterAvisOeilGauche(this.idavisExpert, f.value).subscribe(() =>
            this.service.updateIdAvisExpertDansAutoDetection(this.idAutoDetection, this.idConsult, this.idavisExpert).subscribe(() => { console.log("eyyyyyy") })

          )
          this.presentToastWithOptions()

        }
        )
        )
      }
    })
    )
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
  public maladie = [

    {
      id: 0,
      nom: "diabète",
      valeur: "diab",


    }, {
      id: 1,
      nom: "rhétino",
      valeur: "rhét"
    }, {
      id: 2,
      nom: "surtension",
      valeur: "surt"
    },
    {
      id: 3,
      nom: "saine",
      valeur: "saine"
    },

  ]
  choose() {
    this.choixMaladie = this.selected_maladie?.nom;
    console.log(this.selected_maladie?.nom);

  }

  @Output() shareRatingValue: EventEmitter<number> = new EventEmitter();
  currentValue: number = null;

  getValueSelected(value: number) {
    this.shareRatingValue.emit(value);
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


}
