import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, IonContent, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { Patient } from '../model/patient';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-details-consultationwithout-auto',
  templateUrl: './details-consultationwithout-auto.component.html',
  styleUrls: ['./details-consultationwithout-auto.component.scss'],
})
export class DetailsConsultationwithoutAutoComponent implements OnInit {

  @ViewChild(IonContent) private contente: IonContent;
  public disableButton = false;

  myDate: String = new Date().toLocaleDateString();



  clicked = 0
  images2: any[] = [];
  val: any = 0;
  private sub: any
  src: string
  img: ImageSmoothingQuality;
  cinPatient: any = 0
  idGen: any;
  imagePath: any;
  myFiles: string[] = [];
  index: number = 1;
  base64: string;
  idConsult: any
  selectedFiles: FileList;
  selectedFile: any;
  url: string;


  selectedFiles2: FileList;
  values: any = []
  selectedFile2: any;
  imagee: any;
  imageee: any;
  progressInfos = [];
  images: any[] = [];
  message = '';
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any
  isLoadingAI: boolean = false;
  consultation: any;
  const: any
  autoDetection: any
  var: any = 0;

  patients: Patient[];
  patient: Patient
  cin: any

  patientF: any;
  user: String;
  username: String

  async presentLoading() {
    this.val = 1;
    this.isLoadingAI = true;
    this.disableButton = true;
    setTimeout(() => {
      this.isLoadingAI = false;
      this.service.ajouterAutoDetection(parseInt(localStorage.getItem("id")), this.idConsult).subscribe((params) => {
        this.autoDetection = params
        this.service.idAutoDetection = this.autoDetection.id;
        this.service.updateAutoDetectionInConsultation(parseInt(localStorage.getItem("id")), this.idConsult, this.autoDetection.id).subscribe((params) => { })
        // this.consultation = params, this.idConsult = this.consultation.id
        console.log("ba333333333333333333", this.autoDetection.id)
        console.log("rahmaaaaaaaaaaaaaaaaaaaa", this.consultation);
        this.router.navigate(['detailConsultation', this.idConsult, this.consultation.patient.id, this.autoDetection.id]);
      })


    }, 4000);

  }
  // description : kifeh amlt autoDetectio w hatitha f id mtaa l consultation
  //wawel haja amlt post mtaa AutoDetection k nenzel al Ai model : biensur déja andi consultation men 9bal
  // une fois t3amlt => hatit f router navigate id mtaa autodetection khater post mtaai f back yrajaa objet
  // ya3ni grace a params 3adit les 3 id => f details consultation amlt put ll consultation (image et id autotdetection)


  async presentLoadingh() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();





  }


  segment = 'droite';
  segmentChanged(ev: any) {



  }
  what() {

    this.contente.scrollToBottom(500);


    console.log("yhees");

  }

  config: SwiperOptions = {
    slidesPerView: 1.20,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: { clickable: true },


  };




  constructor(public sanitizer: DomSanitizer, private modalCtrl: ModalController, public actionSheetController: ActionSheetController, public alertController: AlertController,
    public toastController: ToastController, private route: ActivatedRoute, private router: Router, public loadingController: LoadingController, public service: UserService
  ) {
    route.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  async presentToastError() {
    const toast = await this.toastController.create({
      message: 'Consultation ajoutée avec succèes',
      duration: 3000,
      cssClass: "customToast",

    });
    toast.present();
  }


  async ngOnInit() {
    this.clicked = 0
    this.var = 0;
    this.sub = this.route.params.subscribe(params => {
      this.idConsult = +params['id'];
      this.cin = +params['idp']
      this.idGen = parseInt(localStorage.getItem('id'));
      this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.cin).subscribe((params => {
        this.consultation = params;
        console.log("dddddddddddddd", this.consultation.id)

        this.url = "http://localhost:8080/consultation/imageDroite1/" + this.consultation.id;
        console.log("zezezeze", this.url)
        this.images[0] = this.url;

        this.url = "http://localhost:8080/consultation/imageGauche1/" + this.consultation.id;
        console.log("zezezeze", this.url)
        this.images2[0] = this.url;




        /*    if (this.consultation.image1_Droite == null) {
              this.imagePath = "assets/123.jpg"

            }
            else {

              this.retrieveResponse = this.consultation;
              this.base64Data = this.retrieveResponse.image1_Droite;
              this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
              this.images[0] = this.imagePath;
              console.log("lulaa", this.images[0]);
            }

            /*  if (this.consultation.image2_Droite == null) {
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
              }*/
        /*   if (this.consultation.image1_Gauche == null) {
             this.imagePath = "assets/123.jpg"
           }
           else {

             this.retrieveResponse = this.consultation;
             this.base64Data = this.retrieveResponse.image1_Gauche;
             this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
             this.images2[0] = this.imagePath;
             console.log("lulaa", this.images2[0]);
           }

           /*

                     if (this.consultation.image2_Gauche == null) {
                       this.imagePath = "assets/123.jpg"
                     }
                     else {

                       this.retrieveResponse = this.consultation;
                       this.base64Data = this.retrieveResponse.image2_Gauche;
                       this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
                       this.images2[1] = this.imagePath;
                       console.log("tableee 2", this.images2[1]);
                     }


                     if (this.consultation.image3_Gauche == null) {
                       this.imagePath = "assets/123.jpg"
                     }
                     else {

                       this.retrieveResponse = this.consultation;
                       this.base64Data = this.retrieveResponse.image3_Gauche;
                       this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
                       this.images2[2] = this.imagePath;
                       console.log("tableee 2", this.images2[2]);
                     }


                     if (this.consultation.image4_Gauche == null) {
                       this.imagePath = "assets/123.jpg"
                     }
                     else {

                       this.retrieveResponse = this.consultation;
                       this.base64Data = this.retrieveResponse.image4_Gauche;
                       this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
                       this.images2[3] = this.imagePath;
                       console.log("tableee 2", this.images2[3]);
                     }

                     if (this.consultation.image5_Gauche == null) {
                       this.imagePath = "assets/123.jpg"
                     }
                     else {

                       this.retrieveResponse = this.consultation;
                       this.base64Data = this.retrieveResponse.image5_Gauche;
                       this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
                       this.images2[4] = this.imagePath;
                       console.log("tableee 2", this.images2[4]);
                     }*/

      }

      )
      )
    }
    )
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



  async openPreview2(imge) {
    const modal = await this.modalCtrl.create({
      component: ModalImageComponent,
      componentProps: {
        imge
      },
      cssClass: 'transparent-modal'
    });
    modal.present();

  }



}





