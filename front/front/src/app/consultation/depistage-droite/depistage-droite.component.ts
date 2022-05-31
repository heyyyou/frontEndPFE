import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ActionSheetController, AlertController, IonContent, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ModalImageComponent } from 'src/app/modal-image/modal-image.component';
import { Patient } from 'src/app/model/patient';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { PhotoService, UserPhoto } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-depistage-droite',
  templateUrl: './depistage-droite.component.html',
  styleUrls: ['./depistage-droite.component.scss'],
})
export class DepistageDroiteComponent implements OnInit {
  //   @ViewChild(IonContent) private content: IonContent;
  //   public disableButton = false;
  patients: Patient[];

  //   dd: any;

  //   base64 = '';
  //   isLoadingAI: boolean = false;


  //   async presentLoading() {
  //     this.isLoadingAI = true;
  //     this.disableButton = true;

  //     setTimeout(() => {
  //       this.isLoadingAI = false;
  //       this.router.navigate(['detailConsultation']);

  //     }, 5000);

  //   }

  //   // pickImageFromGallery() {
  //   //   var options: ImageOptions = {
  //   //     source: CameraSource.Photos,
  //   //     resultType: CameraResultType.DataUrl
  //   //   }
  //   //   Camera.getPhoto(options).then((result) => {
  //   //     this.base64 = result.dataUrl;
  //   //   }, (err) => {
  //   //     alert(err);

  //   //   })
  //   // }


  //   segment = 'droite';
  //   segmentChanged(ev: any) {


  //   }

  //   config: SwiperOptions = {
  //     slidesPerView: 1.20,
  //     spaceBetween: 15,
  //     centeredSlides: true,
  //     pagination: { clickable: true },


  //   };


  //   // users = [
  //   //   {
  //   //     id: 1,
  //   //     name: "chelly mariem",
  //   //     contry: "chebba",
  //   //     url: "assets/1.jpg",
  //   //   },
  //   //   {
  //   //     id: 2,
  //   //     name: "chelly fatma",
  //   //     contry: "chebba",
  //   //     url: "assets/fatma.jpg",
  //   //   },
  //   //   {
  //   //     id: 3,
  //   //     name: "chelly sarra",
  //   //     contry: "chebba",
  //   //     url: "assets/ma.jpg",
  //   //   },
  //   // ]
  //   //   ;
  //   // qs() {
  //   //   return this.users
  //   // }
  //   // userchoisi() {
  //   //   this.selected_users;
  //   // }

  //   // selected_users = null;
  //   // public pic: string;
  //   // choose() {
  //   //   console.log(this.selected_users)
  //   //   this.pic = this.selected_users.url;
  //   //   console.log(this.pic);
  //   // }


  constructor(public sanitizer: DomSanitizer, private modalCtrl: ModalController, public photoService: PhotoService,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public toastController: ToastController, private router: Router, private picker: ImagePicker,
    public loadingController: LoadingController, public ConsultationMedService: ConsultationMedService, public service: UserService
  ) { }

  //   async presentToast() {
  //     const toast = await this.toastController.create({
  //       message: '5 élèments maximum,merci',
  //       duration: 2000
  //     });
  //     toast.present();
  //   }

  //   async ngOnInit() {
  //     // Camera.requestPermissions({ permissions: ['photos'] })
  //     await this.photoService.loadSaved();
  //     this.dd = localStorage.getItem('port')

  //   }


  //   public async showActionSheet(photo: UserPhoto, position: number) {
  //     const actionSheet = await this.actionSheetController.create({
  //       header: 'Photos',
  //       buttons: [{
  //         text: 'Delete',
  //         role: 'destructive',
  //         icon: 'trash',

  //         handler: () => {
  //           this.photoService.deletePicture(photo, position);
  //         }
  //       }, {
  //         text: 'Cancel',
  //         icon: 'close',
  //         role: 'cancel',
  //         handler: () => {
  //           // Nothing to do, action sheet is automatically closed
  //         }
  //       }]
  //     });
  //     await actionSheet.present();
  //   }



  //   // async openPreview(imge) {
  //   //   const modal = await this.modalCtrl.create({
  //   //     component: ModalImageComponent,
  //   //     componentProps: {
  //   //       imge
  //   //     },
  //   //     cssClass: 'transparent-modal'
  //   //   });
  //   //   modal.present();

  //   // }

  //   dismiss() {
  //     // using the injected ModalController this page
  //     // can "dismiss" itself and optionally pass back data
  //     this.modalCtrl.dismiss({
  //       dismissed: true
  //     });
  //   }
  //   ajouter_patient() {
  //     this.router.navigate(['patient']);


  //   }
  //   openProgress() {

  //   }

  // }
  @ViewChild(IonContent) private content: IonContent; //acces child component

  public disableButton = false;
  cinPatient: any
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

  src: string
  img: ImageSmoothingQuality;
  async presentLoading() {
    this.isLoadingAI = true;
    this.disableButton = true;

    setTimeout(() => {
      this.isLoadingAI = false;
      this.router.navigate(['detailConsultation']);

    }, 5000);

  }


  ajouterData() {
    this.cinPatient = this.service.selectedPatient
    console.log("cin patient", this.cinPatient);
    this.idGen = parseInt(localStorage.getItem('id'));

    // this.service.ajouterDataConsultation(this.idGen, this.cinPatient).subscribe((params) => {
    //   this.consultation = params
    //   console.log(this.consultation);

    //   this.idConsult = this.consultation.id
    //   console.log(this.idConsult);

    //   this.presentLoadingh();
    // }
    // )
  }

  async presentLoadingh() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();




  }
  config: SwiperOptions = {
    slidesPerView: 1.20,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: { clickable: true },


  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: '5 élèments maximum,merci',
      duration: 2000
    });
    toast.present();
  }

  async ngOnInit() {
    // Camera.requestPermissions({ permissions: ['photos'] })
    await this.photoService.loadSaved();
    this.cinPatient = localStorage.getItem('port')
    console.log("cin patient", this.cinPatient);
    this.idGen = parseInt(localStorage.getItem('id'));
    // this.getConsultByid(this.idGen, 1)




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

  uploadFiles() {

    // this.service.ajouterDataConsultation(this.idGen, this.cinPatient).subscribe((params) => {
    //   this.consultation = params

    //   this.idConsult = this.consultation.id
    //   console.log(this.idConsult);
    //   // api consultation  bch tt7at lahneee  , subscribe ttsaker fi commentaire  num2 --> post
    //   this.message = '';
    //   for (let i = 0; i < this.selectedFiles.length; i++) {
    //     this.upload(i, this.selectedFiles[i]);
    //   }
    // })
    // commentaire num2

  }



  ngOninit() {
    this.service.getPatientConsult(parseInt(localStorage.getItem("id"))).subscribe((params: any) => {
      console.log(params);

      this.patients = params;
      err => {
        alert(" proléme dans modifier l'image ")
      }
    }
    )
  }
}


