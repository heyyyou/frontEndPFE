import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet, MenuController, Platform } from '@ionic/angular';
import { ConsultationMedService } from './services/consultation-med.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public isExpert: any;

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  listeAvis() {
    this.router.navigate(["AvisnonExpert"]);
    this.menu.close();

  }
  statistique() {
    this.router.navigate(["statistique"]);
    this.menu.close();

  }

  ngOnInit() {
  }
  // medecin() {
  //   for (var index in ConsultationMedService.doctors)
  //     if (ConsultationMedService.doctors.isExpert === true) {
  //       this.isExpert = true
  //     }
  //     else {
  //       this.isExpert = false
  //     }

  // }

  constructor(public router: Router, private menu: MenuController, private platform: Platform,
    private alertController: AlertController, public ConsultationMedService: ConsultationMedService) { }





  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });

    await alert.present();
  }






  buttonClick() {
    console.log("mama")
  }
  parametre() {
    this.router.navigate(['parametre']);
    this.menu.close();
  }
  logout() {
    this.router.navigate(['login']);
    this.menu.close();
  }
  patient() {
    this.router.navigate(['ListePatient']);
    this.menu.close();
  }
  home() {
    this.router.navigate(['home']);
    this.menu.close();
  }
  notification() {
    this.router.navigate(['AvisnonExpert']);
    this.menu.close();
  }
}

