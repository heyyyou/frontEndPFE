import { Patient } from './../model/patient';
import { UserService } from './../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperOptions, Pagination } from 'swiper';
import { ActionSheetController } from '@ionic/angular';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { UserPhoto, PhotoService } from '../services/photo.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { LoadingController } from '@ionic/angular';
import { ConsultationMedService } from '../services/consultation-med.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Key } from 'protractor';
import { IonicSelectableComponent } from 'ionic-selectable';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
})
export class ConsultationComponent implements OnInit {
  @ViewChild(IonContent) private contente: IonContent;
  public disableButton = false;




  images2: any[] = [];
  val: any = 0;

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

  var: any = 0;

  patients: Patient[];
  patient: Patient

  patientF: any;
  user: String;
  username: String

  async presentLoading() {
    this.val = 1;
    this.isLoadingAI = true;
    this.disableButton = true;
    setTimeout(() => {
      this.isLoadingAI = false;
      this.router.navigate(['detailConsultation']);

    }, 4000);

  }

  // ajouterData() {

  //   this.idGen = parseInt(localStorage.getItem('id'));

  //   this.service.ajouterDataConsultation(this.idGen, this.cinPatient).subscribe((params) => {
  //     this.consultation = params
  //     console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", this.consultation);

  //     this.idConsult = this.consultation.id
  //     console.log(this.idConsult);

  //     this.presentLoadingh();
  //   }
  //   )
  // }

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




  constructor(public sanitizer: DomSanitizer, private modalCtrl: ModalController, public photoService: PhotoService, public actionSheetController: ActionSheetController, public alertController: AlertController,
    public toastController: ToastController, private router: Router, private picker: ImagePicker, public loadingController: LoadingController, public ConsultationMedService: ConsultationMedService, public service: UserService
  ) { }
  async presentToastError() {
    const toast = await this.toastController.create({
      message: 'Consultation ajoutée avec succèes',
      duration: 3000,
      cssClass: "customToast",

    });
    toast.present();
  }


  async ngOnInit() {
    this.idGen = parseInt(localStorage.getItem('id'));
    this.service.getPatientConsult(parseInt(localStorage.getItem("id"))).subscribe((params: any) => {
      console.log(params);

      this.patients = params;

      console.log();



      err => {
        alert(" proléme dans modifier l'image ")
      }
    }

    )


    // Camera.requestPermissions({ permissions: ['photos'] })
    await this.photoService.loadSaved();
  }


  public async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',

        handler: () => {
          this.deletePic()



        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }
      }]
    });
    await actionSheet.present();
  }

  public async showActionSheet2() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',

        handler: () => {
          this.deletePic2()



        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }
      }]
    });
    await actionSheet.present();
  }
  portChange(e
  ) {
    console.log('port:', e.value);
    console.log('port:', e.value.cin);
    this.cinPatient = e.value.cin;
  }


  // async openPreview(imge) {
  //   const modal = await this.modalCtrl.create({
  //     component: ModalImageComponent,
  //     componentProps: {
  //       imge
  //     },
  //     cssClass: 'transparent-modal'
  //   });
  //   modal.present();

  // }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  ajouter_patient() {
    this.router.navigate(['patient']);


  }
  searchPorts(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    let text = event.text.trim().toLowerCase();
    event.component.startSearch();
  }

  selectFiles(event) {

    const files = event.target.files;
    let isImage = true;
    for (let i = 0; i < files.length; i++) {
      if (files.item(i).type.match('image.*')) {
        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }

    if (isImage) {
      this.selectedFiles = event.target.files;
      var reader = new FileReader();
      var reader1 = new FileReader();
      var reader2 = new FileReader();
      var reader3 = new FileReader();
      var reader4 = new FileReader();
      var reader5 = new FileReader();
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.selectedFile = this.selectedFiles[i];
        if (i == 0) {
          reader1.readAsDataURL(this.selectedFiles[i]);
          reader1.onload = (event) => {
            this.imagee = reader1.result;
            this.images[i] = this.imagee;
            console.log(this.images[i])
          }
        }
        if (i == 1) {
          reader2.readAsDataURL(this.selectedFiles[i]);
          reader2.onload = (event) => {
            this.imagee = reader2.result;
            this.images[i] = this.imagee;
            console.log(this.images[i])
          }
        }
        if (i == 2) {
          reader3.readAsDataURL(this.selectedFiles[i]);
          reader3.onload = (event) => {
            this.imagee = reader3.result;
            this.images[i] = this.imagee;
            console.log(this.images[i])
          }
        }
        if (i == 3) {
          reader4.readAsDataURL(this.selectedFiles[i]);
          reader4.onload = (event) => {
            this.imagee = reader4.result;
            this.images[i] = this.imagee;
            console.log(this.images[i])
          }
        }
        if (i == 4) {
          reader5.readAsDataURL(this.selectedFiles[i]);
          reader5.onload = (event) => {
            this.imagee = reader5.result;
            this.images[i] = this.imagee;
            console.log(this.images[i])
          }
        }
      }
    } else {
      this.selectedFiles = undefined;
    }
  }


  deletePic() {
    this.images.splice(0, this.images.length)


  }
  deletePic2() {
    this.images2.splice(0, this.images.length)


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


  upload(idx, file) {
    for (let i = 0; i < this.selectedFiles.length; i++) {
      if (i == 0) {
        this.service.updateImage1G(this.idConsult/* id consu */, file).subscribe(
          event => {

          });
      }
      if (i == 1) {
        this.service.updateImage2G(this.idConsult, file).subscribe(
          event => {

          });
      }
      if (i == 2) {
        this.service.updateImage3G(this.idConsult, file).subscribe(
          event => {


          });
      }
      if (i == 3) {
        this.service.updateImage4G(this.idConsult, file).subscribe(
          event => {

          });
      }
      if (i == 4) {
        this.service.updateImage5G(this.idConsult, file).subscribe(
          event => {

          });
      }
    }
  }

  uploadFiles() {
    this.var = 1;
    this.service.ajouterDataConsultation(this.idGen, this.cinPatient).subscribe((params) => {
      this.consultation = params
      console.log("rahmaaaaaaaaaaaaaaaaaaaa", this.consultation);


      this.idConsult = this.consultation.id
      console.log(this.idConsult);
      // api consultation  bch tt7at lahneee  , subscribe ttsaker fi commentaire  num2 --> post
      this.message = '';
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
        this.upload2(i, this.selectedFiles[i]);
      }
    })
    // commentaire num2
    this.presentToastError()

  }







  //gauche







  selectFiles2(event) {

    const files = event.target.files;
    let isImage = true;
    for (let i = 0; i < files.length; i++) {
      if (files.item(i).type.match('image.*')) {
        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }

    if (isImage) {
      this.selectedFiles = event.target.files;
      var reader = new FileReader();
      var reader1 = new FileReader();
      var reader2 = new FileReader();
      var reader3 = new FileReader();
      var reader4 = new FileReader();
      var reader5 = new FileReader();
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.selectedFile = this.selectedFiles[i];
        if (i == 0) {
          reader1.readAsDataURL(this.selectedFiles[i]);
          reader1.onload = (event) => {
            this.imagee = reader1.result;
            this.images2[i] = this.imagee;
            console.log(this.images[i])
          }
        }
        if (i == 1) {
          reader2.readAsDataURL(this.selectedFiles[i]);
          reader2.onload = (event) => {
            this.imagee = reader2.result;
            this.images2[i] = this.imagee;
            console.log(this.images[i])
          }
        }
        if (i == 2) {
          reader3.readAsDataURL(this.selectedFiles[i]);
          reader3.onload = (event) => {
            this.imagee = reader3.result;
            this.images2[i] = this.imagee;
            console.log(this.images[i])
          }
        }
        if (i == 3) {
          reader4.readAsDataURL(this.selectedFiles[i]);
          reader4.onload = (event) => {
            this.imagee = reader4.result;
            this.images2[i] = this.imagee;
            console.log(this.images[i])
          }
        }
        if (i == 4) {
          reader5.readAsDataURL(this.selectedFiles[i]);
          reader5.onload = (event) => {
            this.imagee = reader5.result;
            this.images2[i] = this.imagee;
            console.log(this.images[i])
          }
        }
      }
    } else {
      this.selectedFiles = undefined;
    }
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


  upload2(idx, file) {
    for (let i = 0; i < this.selectedFiles.length; i++) {
      if (i == 0) {
        this.service.updateImage1D(this.idConsult/* id consu */, file).subscribe(
          event => {

          });
      }
      if (i == 1) {
        this.service.updateImage2D(this.idConsult, file).subscribe(
          event => {

          });
      }
      if (i == 2) {
        this.service.updateImage3D(this.idConsult, file).subscribe(
          event => {


          });
      }
      if (i == 3) {
        this.service.updateImage4D(this.idConsult, file).subscribe(
          event => {

          });
      }
      if (i == 4) {
        this.service.updateImage5D(this.idConsult, file).subscribe(
          event => {

          });
      }
    }
  }

  uploadFiles2() {

    this.service.ajouterDataConsultation(this.idGen, this.cinPatient).subscribe((params) => {
      this.consultation = params

      this.idConsult = this.consultation.id
      console.log(this.idConsult);
      // api consultation  bch tt7at lahneee  , subscribe ttsaker fi commentaire  num2 --> post
      this.message = '';
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload2(i, this.selectedFiles[i]);
      }
    })
    // commentaire num2

  }




}











