import { ConsultationComponent } from './../consultation/consultation.component';
import { Router } from '@angular/router';
import { PhotoService } from './../services/photo.service';
import { ConsultationMedService } from './../services/consultation-med.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-liste-consultation',
  templateUrl: './liste-consultation.component.html',
  styleUrls: ['./liste-consultation.component.scss'],
})
export class ListeConsultationComponent implements OnInit {
  public avisExpert;
  constructor(public ConsultationMedService: ConsultationMedService, public PhotoService: PhotoService, public router: Router, public alertController: AlertController) { }

  newConsultation() {
    this.router.navigate(["consultation"])
  }
  ngOnInit() {


  }
  async suppConsultation() {


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
          //api suppression consultation
        }
      }
      ]


    });


    await alert.present();



  }





  openDetail() {
    this.router.navigate(["consultationAvis"])
  }
  editConsultation() {
    this.router.navigate(["consultation"]) // api update consultation
  }

}





