import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, IonContent, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { SwiperOptions } from 'swiper';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { Patient } from '../model/patient';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-modif-consultation',
  templateUrl: './modif-consultation.component.html',
  styleUrls: ['./modif-consultation.component.scss'],
})
export class ModifConsultationComponent implements OnInit {

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

        console.log("eeee", this.consultation.patient.username);






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
        if (this.consultation.image1_Gauche == null) {
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
    this.var = 1

    const files = event.target.files;
    ;
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
  //f ng on init besh yjiw tsawer l bd melul yhothom f tableau images ken nzel al supp besh yzid tswer okhrin f table ds tt les cas besh yboucli al images



  deletePic() {
    this.var = 1
    this.images.splice(0, this.images.length)
    this.service.suppImagesDroite(parseInt(localStorage.getItem("id")), this.idConsult/* id consu */).subscribe(
      event => {

      });


  }
  deletePic2() {
    this.images2.splice(0, this.images2.length)
    this.service.suppImagesGauches(parseInt(localStorage.getItem("id")), this.idConsult/* id consu */).subscribe(
      event => {

      });




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
  upload2(file) { //ll droite
    console.log("droite", this.selectedFiles);

    for (let i = 0; i < this.selectedFiles.length; i++) {
      if (i == 0) {
        this.service.updateImage1D(this.idConsult, this.selectedFiles[0]).subscribe(
          event => {
            console.log('event1');

          });
      }

      if (i == 1) {
        this.service.updateImage2D(this.idConsult, this.selectedFiles[1]).subscribe(
          event => {
            console.log('event2', event);

          });
      }
      if (i == 2) {
        this.service.updateImage3D(this.idConsult, this.selectedFiles[2]).subscribe(
          event => {
            console.log('event3', event);


          });
      }
      if (i == 3) {
        this.service.updateImage4D(this.idConsult, this.selectedFiles[3]).subscribe(
          event => {
            console.log('event4', event);

          });
      }
      if (i == 4) {
        this.service.updateImage5D(this.idConsult, this.selectedFiles[4]).subscribe(
          event => {
            console.log('event5', event);


          });
      }
    }
  }


  upload(file) {
    console.log("gauche", this.selectedFiles2);

    for (let i = 0; i < this.selectedFiles2.length; i++) {

      if (i == 0) {
        this.service.updateImage1G(this.idConsult, this.selectedFiles2[0]).subscribe(
          event => {
            console.log("event1", event);

          });
      } else
        if (i == 1) {
          this.service.updateImage2G(this.idConsult, this.selectedFiles2[1]).subscribe(
            event => {
              console.log("event2", event);

            });
        } else
          if (i == 2) {
            this.service.updateImage3G(this.idConsult, this.selectedFiles2[2]).subscribe(
              event => {
                console.log("event3", event);


              });
          } else
            if (i == 3) {
              this.service.updateImage4G(this.idConsult, this.selectedFiles2[3]).subscribe(
                event => {

                });
            } else {
              this.service.updateImage5G(this.idConsult, this.selectedFiles2[4]).subscribe(
                event => {

                });
            }
    }
  }





  //gauche







  selectFiles2(event) {
    this.var = 1
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
      this.selectedFiles2 = event.target.files;
      var reader = new FileReader();
      var reader1 = new FileReader();
      var reader2 = new FileReader();
      var reader3 = new FileReader();
      var reader4 = new FileReader();
      var reader5 = new FileReader();
      for (let i = 0; i < this.selectedFiles2.length; i++) {
        this.selectedFile2 = this.selectedFiles2[i];
        if (i == 0) {
          reader1.readAsDataURL(this.selectedFiles2[i]);
          reader1.onload = (event) => {
            this.imagee = reader1.result;
            this.images2[i] = this.imagee;
            console.log(this.images2[i])
          }
        }
       /* if (i == 1) {
          reader2.readAsDataURL(this.selectedFiles2[i]);
          reader2.onload = (event) => {
            this.imagee = reader2.result;
            this.images2[i] = this.imagee;
            console.log(this.images2[i])
          }
        }
        if (i == 2) {
          reader3.readAsDataURL(this.selectedFiles2[i]);
          reader3.onload = (event) => {
            this.imagee = reader3.result;
            this.images2[i] = this.imagee;
            console.log(this.images2[i])
          }
        }
        if (i == 3) {
          reader4.readAsDataURL(this.selectedFiles2[i]);
          reader4.onload = (event) => {
            this.imagee = reader4.result;
            this.images2[i] = this.imagee;
            console.log(this.images2[i])
          }
        }
        if (i == 4) {
          reader5.readAsDataURL(this.selectedFiles2[i]);
          reader5.onload = (event) => {
            this.imagee = reader5.result;
            this.images2[i] = this.imagee;
            console.log(this.images2[i])
            // console.log("pleaseeeeeeeeeeeeeeeeeeeeeeee", this.values.push(this.selectedFiles.length));

          }
        }
        // console.log("pleaseeeeeeeeeeeeeeeeeeeeeeee", this.values.push(this.selectedFiles.length));
      }
    } else {
      this.selectedFiles2 = undefined;
    }

  }
*/}
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

  // upload2(idx, file) { //ll droite
  //   for (let i = 0; i < this.selectedFiles.length; i++) {
  //     if (i == 0) {
  //       this.service.updateImage1D(this.idConsult/* id consu */, file).subscribe(
  //         event => {

  //         });
  //     }
  //     if (i == 1) {
  //       this.service.updateImage2D(this.idConsult, file).subscribe(
  //         event => {

  //         });
  //     }
  //     if (i == 2) {
  //       this.service.updateImage3D(this.idConsult, file).subscribe(
  //         event => {


  //         });
  //     }
  //     if (i == 3) {
  //       this.service.updateImage4D(this.idConsult, file).subscribe(
  //         event => {

  //         });
  //     }
  //     if (i == 4) {
  //       this.service.updateImage5D(this.idConsult, file).subscribe(
  //         event => {

  //         });
  //     }
  //   }
  // }






  modifConsult() {
    this.clicked = 1
    this.upload2(this.selectedFiles);

  }


  modifConsult2() {
    //TEKHDEM KEN LULAAAA WLA LES DEUX
    this.upload(this.selectedFiles2);



  }
}






