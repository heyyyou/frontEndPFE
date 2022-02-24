import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ActionSheetController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { PhotoService, UserPhoto } from './photo.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultationMedService {
  users = [
    {
      id: 11828279,
      name: "chelly mariem",
      num: 22205036,
      adresse: "chellymariem01@gmail.com",
      sexe: "femme",
      dateNaiss: '12/01/2000',
      antecedent: "Tabac , Diabète",
      url: "assets/1.jpg",
    },
    {
      id: 11828279,
      name: "chelly fasma",
      num: 22205036,
      adresse: "chellymariem01@gmail.com",
      sexe: "femme",
      dateNaiss: '12/01/2000',
      antecedent: "Tabac , Diabète",
      url: "assets/fatma.jpg",
    },
    {
      id: 11822279,
      name: "Derbali Sarra",
      num: 22205036,
      adresse: "chellymariem01@gmail.com",
      sexe: "femme",
      dateNaiss: '12/01/2000',
      antecedent: "Tabac , Diabète,Cancer",
      url: "assets/1.jpg",
    },
  ]
    ;
  qs() {
    return this.users
  }
  userchoisi() {
    this.selected_users;
  }

  selected_users = null;
  public pic: string;
  choose() {
    console.log(this.selected_users)
    this.pic = this.selected_users.url;
    console.log(this.pic);
  }


  constructor(private modalCtrl: ModalController, public photoService: PhotoService, public actionSheetController: ActionSheetController, public alertController: AlertController, public toastController: ToastController, private router: Router, private picker: ImagePicker, public loadingController: LoadingController) { }
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


  //xwx<wx
  public salem() {
    this.photoService.loadSaved();
  }
  //<wx<wx<wx
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

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  ajouter_patient() {
    this.router.navigate(['patient']);


  }
}
