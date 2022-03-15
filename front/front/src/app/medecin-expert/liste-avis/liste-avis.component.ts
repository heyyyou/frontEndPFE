import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-avis',
  templateUrl: './liste-avis.component.html',
  styleUrls: ['./liste-avis.component.scss'],
})
export class ListeAvisComponent implements OnInit {

  constructor(private router: Router) { }
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
  ngOnInit() { }

}
