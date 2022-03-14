import { ActionSheetController, ModalController, AlertController } from '@ionic/angular';
import { ConsultationMedService } from './../services/consultation-med.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss'],
})
export class ListePatientComponent implements OnInit {
  constructor(public modalController: ModalController, public AlertController: AlertController, public ConsultationMedService: ConsultationMedService, public actionSheetController: ActionSheetController) { }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async suppConsultation() {


    const alert = await this.AlertController.create({
      cssClass: 'my-custom-class',
      header: 'Êtes-vous sûr de vouloir supprimer ce patient ',

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
          // from data base delete person API ya mariem
        }
      }
      ]


    });


    await alert.present();



  }






  public async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',

        handler: () => {
          this.suppConsultation();
        }
      },
      {
        text: 'modifier',
        icon: 'pencil',
        role: 'update',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }
      },
      {
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

  ngOnInit() { }

}
