import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-liste-consult-expert',
  templateUrl: './liste-consult-expert.component.html',
  styleUrls: ['./liste-consult-expert.component.scss'],
})
export class ListeConsultExpertComponent implements OnInit {
  currentRatingValue: number = null;
  public avisExpert;
  constructor(public ConsultationMedService: ConsultationMedService,
    public photoService: PhotoService, public router: Router, public alertController: AlertController) { }

  newConsultation() {
    this.router.navigate(["consultation"])
  }
  ngOnInit() {
  }
  showRating(rating) {
    this.currentRatingValue = (rating);

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
    this.router.navigate(["DetailsConsultExpert"])
  }


}





