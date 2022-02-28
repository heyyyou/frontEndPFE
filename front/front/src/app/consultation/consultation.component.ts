import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
})
export class ConsultationComponent implements OnInit {
  base64 = '';
  isLoadingAI: boolean = false ;

  async presentLoading() {
    this.isLoadingAI=true ;
    setTimeout(() => {
      this.isLoadingAI=false ;
      this.router.navigate(['detailConsultation']);

    }, 5000);

  }

  // pickImageFromGallery() {
  //   var options: ImageOptions = {
  //     source: CameraSource.Photos,
  //     resultType: CameraResultType.DataUrl
  //   }
  //   Camera.getPhoto(options).then((result) => {
  //     this.base64 = result.dataUrl;
  //   }, (err) => {
  //     alert(err);

  //   })
  // }


  segment = 'all';
  segmentChanged(ev: any) {


  }

  config: SwiperOptions = {
    slidesPerView: 1.20,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: { clickable: true },


  };


  // users = [
  //   {
  //     id: 1,
  //     name: "chelly mariem",
  //     contry: "chebba",
  //     url: "assets/1.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "chelly fatma",
  //     contry: "chebba",
  //     url: "assets/fatma.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "chelly sarra",
  //     contry: "chebba",
  //     url: "assets/ma.jpg",
  //   },
  // ]
  //   ;
  // qs() {
  //   return this.users
  // }
  // userchoisi() {
  //   this.selected_users;
  // }

  // selected_users = null;
  // public pic: string;
  // choose() {
  //   console.log(this.selected_users)
  //   this.pic = this.selected_users.url;
  //   console.log(this.pic);
  // }


  constructor(public sanitizer: DomSanitizer ,private modalCtrl: ModalController, public photoService: PhotoService, public actionSheetController: ActionSheetController, public alertController: AlertController, public toastController: ToastController, private router: Router, private picker: ImagePicker, public loadingController: LoadingController, public ConsultationMedService: ConsultationMedService) { }
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
  }


  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',

        handler: () => {
          this.photoService.deletePicture(photo, position);
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
  openProgress() {

  }

}
