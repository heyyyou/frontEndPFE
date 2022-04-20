import { Patient } from './../model/patient';
import { UserService } from 'src/app/services/user.service';
import { ActionSheetController, ModalController, AlertController, NavParams } from '@ionic/angular';
import { ConsultationMedService } from './../services/consultation-med.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDetailsComponent } from './modal-details/modal-details.component';
import { unwatchFile } from 'fs';


@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss'],
})
export class ListePatientComponent implements OnInit {
  constructor(public router: Router, public modalCtrl: ModalController, route: ActivatedRoute, public modalController: ModalController, public AlertController: AlertController, public ConsultationMedService: ConsultationMedService, public actionSheetController: ActionSheetController, public service: UserService) {
    route.params.subscribe(val => {
      this.ngOnInit();
    })




  }
  patient: any[];
  patientF: any;
  product: any[];
  atient: any[];
  patiente: any;
  nbrPatient: any
  name: any
  id: any
  listePatient() {
    this.service.getPatient(parseInt(localStorage.getItem("id"))).subscribe((params) => {
      console.log(params);

      this.patient = params;
      this.nbrPatient = this.patient.length;
      console.log(this.patient.length);
      // this.name = this.patient.username


      err => {
        alert(" proléme dans modifier l'image ")
      }
    }

    )

  }






  suppPatient(id: number, cin: number) {
    this.service.deletePatient(parseInt(localStorage.getItem("id")), cin).subscribe((params) => {
      this.listePatient()

    })
  }
  // onChange($event) {
  //   console.log($event.target.value);
  // }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async suppConsultation(cin: number) {


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

          this.suppPatient(parseInt(localStorage.getItem("id")), cin)



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
          this.ngOnInit();
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
    console.log("wooooooh");
    this.id = parseInt(localStorage.getItem("id"))
    this.service.getPatient(this.id).subscribe((params) => { this.patient = params; this.patientF = params; })
    // console.log(params);

    // this.patient = params;
    // this.patientF = params;
    // console.log("mememememememe", this.patient);

    // this.nbrPatient = this.patient.length;
    // console.log(this.patient.length);
    // this.name = this.patient.name
    // console.log("heheheh", this.patientF);



    err => {
      alert(" proléme dans modifier l'image ")
    }
  }




  set texte(chaine: string) {

    this.patient = this.filtrer(chaine);

  }



  filtrer(sousChaine: string) {

    console.log(this.patientF.filter(e => e.cin.toString().indexOf(sousChaine) != -1));

    return this.patientF.filter(e => e.username.indexOf(sousChaine) != -1 || e.gender.indexOf(sousChaine) != -1 || e.cin.toString().indexOf(sousChaine) != -1 || e.telephone.toString().indexOf(sousChaine) != -1);


  }

}

