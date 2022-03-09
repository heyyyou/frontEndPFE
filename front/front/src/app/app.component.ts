import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  listeAvis() {
    this.router.navigate(["listeAvis"]);
    this.menu.close();

  }


  ngOnInit() {
  }

  constructor(public router: Router, private menu: MenuController) { }

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

}
