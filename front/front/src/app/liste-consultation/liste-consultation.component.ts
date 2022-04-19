import { Patient } from './../model/patient';
import { Consultation } from './../model/image';
import { UserService } from 'src/app/services/user.service';
import { StarsComponent } from './../rating/stars/stars.component';
import { ConsultationComponent } from './../consultation/consultation.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from './../services/photo.service';
import { ConsultationMedService } from './../services/consultation-med.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { NgZone } from '@angular/core';
import { Platform } from '@ionic/angular'
@Component({
  selector: 'app-liste-consultation',
  templateUrl: './liste-consultation.component.html',
  styleUrls: ['./liste-consultation.component.scss'],
})
export class ListeConsultationComponent implements OnInit {
  consultation: any[];
  ConsultationF: any
  nbrConsultation: any
  consult: any
  base64: string;
  uploadImageData: any
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string;
  imageName: any;
  url: any;
  imagePath: any; //string=null;
  user: any;
  id: number;
  gender: string = "";
  public name = localStorage.getItem("name");
  currentRatingValue: number = null;
  public avisExpert;
  public images = localStorage.getItem("image")
  constructor(public ConsultationMedService: ConsultationMedService, public menu: MenuController, public plt: Platform,
    public PhotoService: PhotoService, public toastController: ToastController, public zone: NgZone, public router: Router, public alertController: AlertController, route: ActivatedRoute, public service: UserService, private ar: ActivatedRoute) {
    route.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  newConsultation() {
    this.router.navigate(["consultation"])
  }
  suppConsultatiown(id: number, idConsult: number) {
    this.service.deleteConsultation(parseInt(localStorage.getItem("id")), idConsult).subscribe((params) => {
      this.presentToast()
      this.getAllconsultation();
    })
  }

  // listeConsultation() {
  // this.service.getallConsultation(parseInt(localStorage.getItem("id"))).subscribe((params) => {
  //     console.log(params);

  //     this.consultation = params;
  //     this.nbrConsultation = this.consultation.length;
  //     console.log(this.consultation.length);
  //     // this.name = this.patient.username


  //     err => {
  //       alert(" proléme dans modifier l'image ")
  //     }
  //   }

  //   )

  // }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'suppression avec succées',
      duration: 3000,
      position: 'top',

    });
    toast.present();
  }



  getAllconsultation() {
    console.log("wooooooh");
    this.id = parseInt(localStorage.getItem("id"))
    this.service.getallConsultation(this.id).subscribe((params) => { this.consultation = params; this.ConsultationF = params; this.consult = params })
  }


  ngOnInit() {
    this.getAllconsultation()
    let id: number
    this.ar.paramMap.subscribe((params) => {
      id = +params.get('id')
      this.service.getData(id).subscribe(data => {
        this.user = data
        console.log(this.user.image)
        if (this.user.image == null) {
          this.imagePath = "assets/123.jpg"
        }
        else {
          this.retrieveResponse = this.user;
          this.base64Data = this.retrieveResponse.image;
          this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        }

      });

      console.log(this.user)

    });


  }
  showRating(rating) {
    this.currentRatingValue = (rating);

  }
  listeAvis() {
    this.router.navigate(["AvisnonExpert"]);
    this.menu.close();

  }
  statistique() {
    this.router.navigate(["statistique"]);
    this.menu.close();

  }
  parametre() {
    this.router.navigate(['parametre']);
    this.menu.close();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    this.menu.close();
    localStorage.clear();
  }
  patient() {
    this.router.navigate(['ListePatient']);
    this.menu.close();
  }
  profil() {
    this.router.navigate(['profil']);
    this.menu.close();
  }
  home() {
    this.router.navigate(['home']);
    this.menu.close();
  }
  notification() {
    this.router.navigate(['AvisnonExpert']);
    this.menu.close();
  }



  async suppConsultation(id: number) {


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Êtes-vous sûr de vouloir supprimer cette consultation ? ',

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
          this.suppConsultatiown(parseInt(localStorage.getItem("id")), id)
        }
      }
      ]


    });


    await alert.present();



  }
  set texte(chaine: string) {

    this.consultation = this.filtrer(chaine);

  }



  filtrer(sousChaine: string) {

    console.log(this.ConsultationF.filter(e => e.patient.cin.toString().indexOf(sousChaine) != -1));

    return this.ConsultationF.filter(e => e.patient.username.indexOf(sousChaine) != -1 || e.patient.cin.toString().indexOf(sousChaine) != -1);


  }





  openDetail() {

    this.router.navigate(["consultation"]) // api update consultation

    // this.router.navigate(["consultationAvis"])
  }
  editConsultation() {
    this.router.navigate(["consultation"]) // api update consultation
  }
  openDetail2() {
    this.router.navigate(["consultationAvis"]) // api update consultation

    // this.router.navigate(["consultationAvis"])
  }

}





