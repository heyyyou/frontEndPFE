import { UserService } from 'src/app/services/user.service';
import { ActionSheetController, ModalController, AlertController } from '@ionic/angular';
import { ConsultationMedService } from './../services/consultation-med.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss'],
})
export class ListePatientComponent implements OnInit {
  constructor(public modalController: ModalController, public AlertController: AlertController, public ConsultationMedService: ConsultationMedService, public actionSheetController: ActionSheetController, public service: UserService) {

    this.service.getPatient(parseInt(localStorage.getItem("id"))).subscribe((params) => {
      this.patient = params;
      this.nbrPatient = this.patient.length;
      console.log(this.patient.length);
      this.name = this.patient.name




      err => {
        alert(" proléme dans modifier l'image ")
      }
    }

    )

  }
  patient: any;
  nbrPatient: any
  name: any
  id: any
  listePatient() {
    this.service.getPatient(parseInt(localStorage.getItem("id"))).subscribe((params) => {
      this.patient = params;
      this.nbrPatient = this.patient.length;
      console.log(this.patient.length);
      this.name = this.patient.name


      err => {
        alert(" proléme dans modifier l'image ")
      }
    }

    )
  }

  suppPatient(id: number, cin: number) {
    this.service.deletePatient(parseInt(localStorage.getItem("id")), cin).subscribe((params) => {
    })
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async suppConsultation(id: number) {


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

          ;
          console.log(this.id);

          this.suppPatient(parseInt(localStorage.getItem("id")), id)

        }
      }
      ]


    });


    await alert.present();



  }






  public async showActionSheet(id: number) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',

        handler: () => {
          this.suppConsultation(id);
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

  ngOnInit() {
    this.service.getPatient(parseInt(localStorage.getItem("id"))).subscribe((params) => {
      this.patient = params;
      this.nbrPatient = this.patient.length;
      console.log(this.patient.length);
      this.name = this.patient.name






      err => {
        alert(" proléme dans modifier l'image ")
      }
    }

    )
  }
}

