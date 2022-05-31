import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss'],

})
export class ModalDetailsComponent implements OnInit {
  private sub: any;
  patientid: any;
  nbrPatient: any
  name: any
  id: any
  cin: any

  constructor(private router: Router, private route: ActivatedRoute, public service: UserService, public modalCtrl: ModalController) { }

  ngOnInit() {
    console.log("hihizhihih");

    this.sub = this.route.params.subscribe(params => {
      this.cin = +params['id'];
      this.service.patientID(parseInt(localStorage.getItem("id")), this.cin).subscribe((params) => {
        this.patientid = params;
        console.log(params);
      })
    }
    )
  }

  dismissModal() {
    this.router.navigate(['ListePatient']);

  }
  patientId(id: number, cin: number) {
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhh");

    this.sub = this.route.params.subscribe(params => {
      this.cin = +params['id'];
      this.service.patientID(parseInt(localStorage.getItem("id")), this.cin).subscribe((params) => {
        this.patientid = params;
        console.log(params);

      })
    }

    )
  }
}
