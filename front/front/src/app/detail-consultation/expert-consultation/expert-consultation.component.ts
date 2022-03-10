

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-expert-consultation',
  templateUrl: './expert-consultation.component.html',
  styleUrls: ['./expert-consultation.component.scss'],
})
export class ExpertConsultationComponent implements OnInit {
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

