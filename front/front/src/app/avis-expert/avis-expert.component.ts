import { ModalController } from '@ionic/angular';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avis-expert',
  templateUrl: './avis-expert.component.html',
  styleUrls: ['./avis-expert.component.scss'],
})
export class AvisExpertComponent implements OnInit {
  @Output() shareRatingValue: EventEmitter<number> = new EventEmitter();
  currentValue: number = null;
  commentaireExpert: any

  getValueSelected(value: number) {
    this.shareRatingValue.emit(value);
  }



  constructor(public ConsultationMedService: ConsultationMedService, public modalController: ModalController) { }


  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  ngOnInit() { }

}
