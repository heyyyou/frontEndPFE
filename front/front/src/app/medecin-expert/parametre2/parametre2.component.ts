import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametre2',
  templateUrl: './parametre2.component.html',
  styleUrls: ['./parametre2.component.scss'],
})
export class Parametre2Component implements OnInit {

  constructor(public router: Router) { }
  toggleTheme(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark')
    } else {
      document.body.setAttribute('color-theme', 'light')

    }
  }
  backhome() {
    this.router.navigate(['homeExpert']);

  }
  ngOnInit() { }

}
