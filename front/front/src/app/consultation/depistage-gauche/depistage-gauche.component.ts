import { id } from 'date-fns/locale';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ActionSheetController, AlertController, IonContent, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { PhotoService, UserPhoto } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';
import { SwiperOptions } from 'swiper';
import { ModalImageComponent } from 'src/app/modal-image/modal-image.component';

@Component({
  selector: 'app-depistage-gauche',
  templateUrl: './depistage-gauche.component.html',
  styleUrls: ['./depistage-gauche.component.scss'],
})
export class DepistageGaucheComponent implements OnInit {

  @ViewChild(IonContent) private content: IonContent; //acces child component

  public disableButton = false;
  cinPatient: any
  idGen: any;
  imagePath: any;
  myFiles: string[] = [];
  index: number = 1;
  base64: string;
  idConsult: any
  uploadImageData1: any
  uploadImageData2: any
  uploadImageData3: any
  uploadImageData4: any
  uploadImageData5: any
  selectedFile1: string[] = [];
  selectedFile2: string[] = [];
  selectedFile3: string[] = [];
  selectedFile4: string[] = [];
  selectedFile5: string[] = [];
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any
  isLoadingAI: boolean = false;
  images: any[] = [];
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
    this.cinPatient = localStorage.getItem('port')
    console.log("cin patient", this.cinPatient);
    this.idGen = parseInt(localStorage.getItem('id'));

    this.service.ajouterDataConsultation(this.idGen, this.cinPatient).subscribe((params) => {
      this.consultation = params
      console.log(this.consultation);

      this.idConsult = this.consultation.id
      console.log(this.idConsult);

      this.presentLoadingh();


      console.log(this.selectedFile1);
      this.uploadImageData1 = new FormData();
      this.uploadImageData2 = new FormData();
      this.uploadImageData3 = new FormData();
      this.uploadImageData4 = new FormData();
      this.uploadImageData5 = new FormData();
      this.uploadImageData1.append('image1', this.selectedFile1);
      this.uploadImageData2.append('image2', this.selectedFile2);
      this.uploadImageData3.append('image3', this.selectedFile3);
      this.uploadImageData4.append('image4', this.selectedFile4);
      this.uploadImageData5.append('image5', this.selectedFile5);



      console.log(this.selectedFile1)
      if (this.selectedFile1 !== null) {
        this.service.updateImage1G(this.idConsult, this.uploadImageData1).subscribe(

          err => {
            alert(" proléme dans modifier l'image ")
          }
        );
      }
      if (this.selectedFile2 !== null) {

        this.service.updateImage2G(this.idConsult, this.uploadImageData2).subscribe(

          err => {
            alert(" proléme dans modifier l'image ")
          }
        );
      }
      if (this.selectedFile3 !== null) {

        this.service.updateImage3G(this.idConsult, this.uploadImageData3).subscribe(

          err => {
            alert(" proléme dans modifier l'image ")
          }
        );
      }
      if (this.selectedFile4 !== null) {

        this.service.updateImage4G(this.idConsult, this.uploadImageData4).subscribe(

          err => {
            alert(" proléme dans modifier l'image ")
          }
        );
      }
      if (this.selectedFile5 !== null) {

        this.service.updateImage5G(this.idConsult, this.uploadImageData5).subscribe(

          err => {
            alert(" proléme dans modifier l'image ")
          }
        );

      }
    })



  }


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

  config: SwiperOptions = {
    slidesPerView: 1.20,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: { clickable: true },


  };




  constructor(public sanitizer: DomSanitizer, private modalCtrl: ModalController, public photoService: PhotoService,
    public actionSheetController: ActionSheetController, public alertController: AlertController,
    public toastController: ToastController, private router: Router, private picker: ImagePicker,
    public loadingController: LoadingController, public ConsultationMedService: ConsultationMedService, public service: UserService, private ar: ActivatedRoute
  ) { }

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

  public async showActionSheet(name: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',

        handler: () => {
          this.deletePic(name)



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
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedFile1 = event.target.files[0];
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imagePath = reader.result;
        this.images[0] = this.imagePath;

      }
    }
  }

  //crud images consultation

  onSelectFile1(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedFile2 = event.target.files[0];
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imagePath = reader.result;
        this.images[1] = this.imagePath;

      }
    }
  }
  onSelectFile2(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedFile2 = event.target.files[0];
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imagePath = reader.result;
        this.images[2] = this.imagePath;

      }
    }
  }
  onSelectFile3(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedFile3 = event.target.files[0];
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imagePath = reader.result;
        this.images[3] = this.imagePath;
        console.log("qsqsqsqs", this.images[0].name)
      }


    }
  }

  onSelectFile4(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedFile4 = event.target.files[0];
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imagePath = reader.result;
        this.images[4] = this.imagePath;

      }
    }
  }
  deletePic(id: number) {
    this.images.splice(id, 1)
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
  getConsultByid(id: number, idConsult: number) {
    this.service.getConsultationID(parseInt(localStorage.getItem("id")), 1).subscribe((params) => {
      console.log(params);


      // this.name = this.patient.username


      err => {
        alert(" proléme dans modifier l'image ")
      }
    }

    )

  }



}





