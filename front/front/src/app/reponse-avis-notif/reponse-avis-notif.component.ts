import { Generaliste } from './../model/generaliste';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reponse-avis-notif',
  templateUrl: './reponse-avis-notif.component.html',
  styleUrls: ['./reponse-avis-notif.component.scss'],
})
export class ReponseAvisNotifComponent implements OnInit {
  consult: any
  ConsultationF: any
  id: any
  consultation: any

  // reponseDetails() {
  //   this.router.navigate(["consultationAvis"]);
  //   this.menu.close();
  // }

  constructor(public router: Router, private ar: ActivatedRoute, private menu: MenuController, public service: UserService) { }

  ngOnInit() {


    this.id = parseInt(localStorage.getItem("id"))
    this.service.getAllConsultationExpert().subscribe((params) => {
      this.consultation = params; this.ConsultationF = params; this.consult = params
      console.log("ya nariiiia aalik ya mounira", this.consultation)
      console.log("ahmeddd", this.consultation)


    })
  }


}
