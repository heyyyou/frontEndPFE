import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { ConsultationMedService } from '../services/consultation-med.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-liste-consultation-per',
  templateUrl: './liste-consultation-per.component.html',
  styleUrls: ['./liste-consultation-per.component.scss'],
})
export class ListeConsultationPerComponent implements OnInit {

  currentRatingValue: number = null;
  public avisExpert;
  constructor(public ConsultationMedService: ConsultationMedService, public menu: MenuController,
    public PhotoService: PhotoService, public router: Router, public alertController: AlertController) { }

  newConsultation() {
    this.router.navigate(["consultation"])
  }
  ngOnInit() {
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
    this.router.navigate(['login']);
    this.menu.close();
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



