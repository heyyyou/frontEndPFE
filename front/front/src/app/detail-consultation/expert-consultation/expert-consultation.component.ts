

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-expert-consultation',
  templateUrl: './expert-consultation.component.html',
  styleUrls: ['./expert-consultation.component.scss'],
})
export class ExpertConsultationComponent implements OnInit {
  public selected_maladie = null

  public choixMaladie = null


  public gravite = [
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
  public maladie = [
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

  constructor(public modalController: ModalController) { }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  Valider() {
    //ici je vais valider forms apres dismiss model stars
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  ngOnInit() {
  }




}

