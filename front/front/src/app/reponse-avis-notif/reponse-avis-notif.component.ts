import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reponse-avis-notif',
  templateUrl: './reponse-avis-notif.component.html',
  styleUrls: ['./reponse-avis-notif.component.scss'],
})
export class ReponseAvisNotifComponent implements OnInit {
  reponseDetails() {
    this.router.navigate(["consultationAvis"]);
    this.menu.close();
  }

  constructor(public router: Router, private menu: MenuController) { }

  ngOnInit() { }

}
