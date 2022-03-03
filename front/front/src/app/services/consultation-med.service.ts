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
  myDate: String = new Date().toLocaleDateString();
  AIModel: String = " oeil droite le malade a la maladie de .. et oeil gauche a la maladie de..s "
  avisExpert: boolean
  demandeAvis: boolean

  users = [
    {
      id: 11828279,
      name: 'chelly mariem',
      num: 22205036,
      adresse: 'chellymariem01@gmail.com',
      sexe: 'Femme',
      dateNaiss: '12/01/2000',
      antecedent: 'Tabac , Diabète',
      url: 'assets/sirra.jpg',
    },
    {
      id: 11528279,
      name: "chelly fasma",
      num: 22205036,
      adresse: 'chellymariem01@gmail.com',
      sexe: 'Femme',
      dateNaiss: '12/01/2000',
      antecedent: 'Tabac , Diabète',
      url: 'assets/mama.jpg',
    },
    {
      id: 11822279,
      name: 'Derbali Sarra',
      num: 22205036,
      adresse: 'chellymariem01@gmail.com',
      sexe: 'Femme',
      dateNaiss: '12/01/2400',
      antecedent: 'Tabac , Diabète,Cancer',
      url: 'assets/mama.jpg',
    },
    {
      id: 125822279,
      name: 'Chelly Med',
      num: 22205036,
      adresse: 'chellymariem01@gmail.com',
      sexe: 'Femme',
      dateNaiss: '12/01/2000',
      antecedent: 'Tabac,Diabète,Cancer',
      url: 'assets/mama.jpg',
    },
  ]
    ;
  static consultation_id: any;

  qs() {
    return this.users;
  }
  userchoisi() {
    this.selected_users;
  }

  selected_users = null;
  public pic: string;
  choose() {
    console.log(this.selected_users);
    this.pic = this.selected_users.url;
    console.log(this.pic);
  }


  //temporary because i ll have a dtabase
  consultation = [
    {

      Nameusers: "Derbali Sarra", // apres bel id fel api
      date: this.myDate,
      imgMedical: "assets/6.jpg",
      AImodelD: "maladie de rhétinopathie ",
      AImodelG: "saine ",
      DemandeAvis: true,

      avisExpert: true
    },
    {

      Nameusers: "Chelly Med", // apres bel id fel api
      date: this.myDate,
      imgMedical: "assets/6.jpg",
      AImodelD: "maladie de rhétinopathie ",
      AImodelG: "maladie de rhétinopathie ",
      DemandeAvis: true,

      avisExpert: true
    },
    {

      Nameusers: "Chelly Meriem", // apres bel id fel api
      date: this.myDate,
      imgMedical: "assets/7.jpg",
      AImodelD: "maladie de rhétinopathie ",
      AImodelG: "maladie de rhétinopathie ",
      DemandeAvis: true,

      avisExpert: false
    }
  ];
  consultation_id = [ // i did it because i need only one when i ll do DB i ll sove the problem
    {
      id: 125822279,
      name: 'Chelly Med',
      num: 22205036,
      adresse: 'chellymariem01@gmail.com',
      sexe: 'Femme',
      dateNaiss: '12/01/2000',
      antecedent: 'Tabac,Diabète,Cancer',
      url: 'assets/mama.jpg',
      dateConslt: this.myDate,
      imgMedical: "assets/7.jpg",
      AImodelD: "maladie de rhétinopathie ",
      AImodelG: "maladie de rhétinopathie ",
      DemandeAvis: false,
      avisExpert: false,
      isExpert: true

    }



  ]


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
      dismissed: true
    });
  }
  ajouter_patient() {
    this.router.navigate(['patient']);


  }
}
