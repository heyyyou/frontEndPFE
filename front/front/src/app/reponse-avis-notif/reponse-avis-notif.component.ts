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
  imagePath: any;
  consultation: any
  retrieveResponse: any;
  base64Data: string;
  nbr: any
  user: any
  // reponseDetails() {
  //   this.router.navigate(["consultationAvis"]);
  //   this.menu.close();
  // }

  constructor(public router: Router, private ar: ActivatedRoute, private menu: MenuController, public service: UserService) { }
  here() {
    let id: number
    this.ar.paramMap.subscribe((params) => {
      id = +params.get('id')
      this.service.getData(id).subscribe(data => {
        this.user = data
        console.log(this.user.image)
        if (this.user.image == null) {
          this.imagePath = "assets/123.jpg"
        }
        else {
          this.retrieveResponse = this.user;
          this.base64Data = this.retrieveResponse.image;
          this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        }

      });

      console.log(this.user)

    });

  }
  ngOnInit() {
    this.here();

    this.id = parseInt(localStorage.getItem("id"))
    this.service.consultationNotifGen().subscribe((params) => {
      this.consultation = params; this.ConsultationF = params; this.consult = params
      console.log("ya nariiiia aalik ya mounira", this.consultation)
      console.log("ahmeddd", this.consultation)
      this.nbr = this.consultation.length;
      console.log("heskdsdf", this.nbr)
    })
  }


}
