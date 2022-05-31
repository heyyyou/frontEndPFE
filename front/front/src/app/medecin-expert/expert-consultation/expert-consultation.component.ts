

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-expert-consultation',
  templateUrl: './expert-consultation.component.html',
  styleUrls: ['./expert-consultation.component.scss'],
})
export class ExpertConsultationComponent implements OnInit {
  public selected_maladie = null

  public choixMaladie = null
  public disableButton = false;

  truthClick() {
    this.disableButton = true;
  }

  public gravite = [
    {
      id: 0,
      valeur: 0
    },
    {
      id: 1,
      valeur: 1
    },
    {
      id: 2,
      valeur: 2
    },
    {
      id: 3,
      valeur: 3
    }

  ]
  public maladie = [{
    id: 0,
    nom: "saine",
    value: "saine",
  },
  {
    id: 1,
    nom: "diabète",
    value: "diab",


  }, {
    id: 2,
    nom: "rhétino",
    value: "rhét"
  }, {
    id: 3,
    nom: "surtension",
    value: "surt"
  },

  ]
  choose() {
    this.choixMaladie = this.selected_maladie.nom;
    console.log(this.selected_maladie.nom);

  }

  @Output() shareRatingValue: EventEmitter<number> = new EventEmitter();
  currentValue: number = null;

  getValueSelected(value: number) {
    this.shareRatingValue.emit(value);
  }

  constructor(public modalController: ModalController,
    public router: Router, public ToastController: ToastController) { }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
    this.presentToast()

  }
  Valider() {
    //ici je vais valider forms apres dismiss model stars
    this.modalController.dismiss({
      'dismissed': true
    });

  }
  ngOnInit() {
  }
  async presentToast() {
    const toast = await this.ToastController.create({
      message: 'votre Avis a été envoyé avec succès ',
      duration: 6000
    });
    toast.present();
    this.router.navigate(["listeConsultExpert"]) //redirect to the current  consultation(filter ) eli hia f liste



  }



}

