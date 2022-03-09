import { ActionSheetController, ModalController } from '@ionic/angular';
import { ConsultationMedService } from './../services/consultation-med.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss'],
})
export class ListePatientComponent implements OnInit {
  constructor(public modalController: ModalController, public ConsultationMedService: ConsultationMedService, public actionSheetController: ActionSheetController) { }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  public async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',

        handler: () => { // from data base delete person API ya mariem
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
