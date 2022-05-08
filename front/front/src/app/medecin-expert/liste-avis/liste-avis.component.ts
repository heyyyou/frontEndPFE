import { Generaliste } from './../../model/generaliste';
import { MenuController, ModalController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-avis',
  templateUrl: './liste-avis.component.html',
  styleUrls: ['./liste-avis.component.scss'],
})
export class ListeAvisComponent implements OnInit {
  Consultation: any[]
  ConsultationF: any
  consult: any
  user: any = {};
  name: any
  base64: string;
  uploadImageData: any
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string;
  imageName: any;
  url: any;
  imagePath: any; //string=null;
  nombreConsult: any
  id: number;
  gender: string = "";

  consultation: any
  constructor(private router: Router, private ar: ActivatedRoute, public menu: MenuController, public toastController: ToastController, public service: UserService, private modelController: ModalController, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.ngOnInit()
    // new notif

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  details() {
    this.router.navigate(["detailsnotif"])
  }
  dismissModal() {
    this.modelController.dismiss()
  }

  ngOnInit() {
    this.presentToast();
    this.here()
    this.service.consultationNotifParDemande().subscribe((params) => {
      this.consultation = params; this.ConsultationF = params; this.consult = params
      console.log("ya nariiiia aalik ya mounira", this.consultation)
      console.log("ahmeddd", this.consultation)
      this.nombreConsult = this.consultation.length


    })
  }
  here() {
    let id: number
    this.ar.paramMap.subscribe((params) => {
      id = +params.get('id')
      this.service.getDataExpert(id).subscribe(data => {


        this.user = data
        this.name = this.user.username
        console.log("eee", this.user.image)
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
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Welcome Doctor' + " " + localStorage.getItem("name"),
      duration: 3000,
      position: 'top',
      cssClass: "customToast"
    });
    toast.present();
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    this.menu.close();
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

  }
  Historiques() {
    this.router.navigate(['listeConsultExpert']);
    this.menu.close();
  }
  notification() {
    this.router.navigate(['homeExpert']);
    this.menu.close();
  }
  parametre() {
    this.router.navigate(['parametre2']);
    this.menu.close();
  }
  profil() {
    this.router.navigate(['profilExpert']);
    this.menu.close();
  }
  statistique() {
    this.router.navigate(['statExpert']);
    this.menu.close();
  }

}



