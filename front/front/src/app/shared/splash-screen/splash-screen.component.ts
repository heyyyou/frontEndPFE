import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {

  constructor(public router: Router) {
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 3000);
  }

  ngOnInit() { }

}
