import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';

@Component({
  selector: 'app-gestion-avis',
  templateUrl: './gestion-avis.component.html',
  styleUrls: ['./gestion-avis.component.scss'],
})
export class GestionAvisComponent implements OnInit {

  @Output() shareRatingValue: EventEmitter<number> = new EventEmitter();
  currentValue: number = null;
  commentaireExpert: any

  getValueSelected(value: number) {
    this.shareRatingValue.emit(value);
  }



  constructor(public router: Router, public ConsultationMedService: ConsultationMedService, public modalController: ModalController, public alertController: AlertController) { }


  async suppAvis() {


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Êtes-vous sûr de vouloir supprimer votre Avis? ',

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
          this.router.navigate(['homeExpert']);
        }
      }
      ]


    });


    await alert.present();



  }
  modifAvis() {
    this.router.navigate(['detailsnotif']);

  }
  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  ngOnInit() { }

}
