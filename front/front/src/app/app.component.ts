import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router, private menu: MenuController) { }
  buttonClick() {
    console.log("mama")
  }
  parametre() {
    this.router.navigate(['parametre']);
    this.menu.close();
  }
}
