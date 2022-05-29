import { Consultation } from './../model/image';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { ConsultationMedService } from '../services/consultation-med.service';
import { PhotoService } from '../services/photo.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-liste-consultation-per',
  templateUrl: './liste-consultation-per.component.html',
  styleUrls: ['./liste-consultation-per.component.scss'],
})
export class ListeConsultationPerComponent implements OnInit {
  id: any
  cin: any
  consultation: any
  nofound: boolean = false
  private sub: any;
  nbrConsultation: any
  ConsultationF
  currentRatingValue: number = null;
  public avisExpert;
  constructor(public ConsultationMedService: ConsultationMedService, public menu: MenuController,
    public PhotoService: PhotoService, public toastController: ToastController, public service: UserService, public router: Router, public alertController: AlertController, private route: ActivatedRoute, private ar: ActivatedRoute) {
    route.params.subscribe(val => {
      this.ngOnInit();
    })
  }

  newConsultation() {
    this.router.navigate(["consultation"])
  }
  ngOnInit() {
    this.presentToaste()

    console.log("dsdsdsdsdsd")
    this.sub = this.route.params.subscribe(params => {
      this.cin = +params['id']
      console.log("ssssssssssssssssssssssssssssssssssssssssssssssss", this.cin)
      console.log(this.cin)
      this.service.getConsultationPatient(parseInt(localStorage.getItem("id")), this.cin).subscribe((params) => {
        this.consultation = params; this.ConsultationF = params;
        this.nbrConsultation = this.consultation.length
        console.log("zazzzz", this.nbrConsultation);
      })
    }
    )
  }
  async presentToaste() {
    const toast = await this.toastController.create({
      message: 'Welcome Doctor' + " " + localStorage.getItem("name"),
      duration: 3000,
      position: 'bottom',
      cssClass: "customToast"
    });
    toast.present();
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



  async presentToast() {
    const toast = await this.toastController.create({
      message: 'suppression avec succées',
      duration: 3000,
      position: 'bottom',

    });
    toast.present();
  }


  openDetail() {

    this.router.navigate(["consultation"]) // api update consultation

    // this.router.navigate(["consultationAvis"])
  }

  editConsultation() {
    this.router.navigate(["consultation"]) // api update consultation
  }




  getAllConsultation() {
    this.service.getConsultationPatient(parseInt(localStorage.getItem("id")), this.cin).subscribe((params) => {
      this.consultation = params; this.ConsultationF = params;
    })
  }
  suppConsultatiown(id: number, idConsult: number) {
    this.service.deleteConsultation(parseInt(localStorage.getItem("id")), idConsult).subscribe((params) => {
      this.presentToast()
      this.getAllConsultation();
    })
  }

  // getConsultationpat() {
  //   this.service.getConsultationPatient(parseInt(localStorage.getItem("id")), this.cin).subscribe((params) => { this.consultation = params; this.ConsultationF = params; })
  //   console.log(this.consultation);

  // }

  showRating(rating) {
    this.currentRatingValue = (rating);

  }
  set texte(chaine: string) {

    this.consultation = this.filtrer(chaine);
    if (this.consultation == null) {
      this.nofound == true

    }

  }



  filtrer(sousChaine: string) {

    console.log(this.ConsultationF.filter(e => e.patient.cin.toString().indexOf(sousChaine) != -1));

    return this.ConsultationF.filter(e => e.dateConsult.indexOf(sousChaine) != -1);


  }
}



