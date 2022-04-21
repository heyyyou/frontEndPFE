import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-consult-expert',
  templateUrl: './liste-consult-expert.component.html',
  styleUrls: ['./liste-consult-expert.component.scss'],
})
export class ListeConsultExpertComponent implements OnInit {
  currentRatingValue: number = null;
  public avisExpert;
  Consultation: any[]
  ConsultationF: any
  consult: any
  constructor(public ConsultationMedService: ConsultationMedService,
    public photoService: PhotoService, public service: UserService, public router: Router, public alertController: AlertController) { }

  newConsultation() {
    this.router.navigate(["consultation"])
  }
  ngOnInit() {
    this.service.getAllConsultationExpert().subscribe((params) => {
      this.Consultation = params; this.ConsultationF = params; this.consult = params
      console.log(this.Consultation)
    })
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





