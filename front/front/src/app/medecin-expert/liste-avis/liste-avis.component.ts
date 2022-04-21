import { Generaliste } from './../../model/generaliste';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-avis',
  templateUrl: './liste-avis.component.html',
  styleUrls: ['./liste-avis.component.scss'],
})
export class ListeAvisComponent implements OnInit {
  Consultation: any[]
  ConsultationF: any
  consult: any
  constructor(private router: Router, public service: UserService, private modelController: ModalController, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  doRefresh(event) {
    console.log('Begin async operation');
    // new notif

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  details() {
    this.router.navigate(["detailsnotif"])
  }
  dismissModal() {
    this.modelController.dismiss()
  }
  ngOnInit() {
    this.service.getAllConsultationExpert().subscribe((params) => {
      this.Consultation = params; this.ConsultationF = params; this.consult = params
      console.log(this.Consultation)
    })
  }

}
