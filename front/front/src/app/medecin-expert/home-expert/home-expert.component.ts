import { Consultation } from './../../model/image';
import { UserService } from './../../services/user.service';
import { MenuController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-expert',
  templateUrl: './home-expert.component.html',
  styleUrls: ['./home-expert.component.scss'],
})
export class HomeExpertComponent implements OnInit {
  //   user: any = {};
  //   base64: string;
  //   uploadImageData: any
  //   selectedFile: File;
  //   retrievedImage: any;
  //   base64Data: any;
  //   retrieveResponse: any;
  //   message: string;
  //   imageName: any;
  //   url: any;
  //   imagePath: any; //string=null;
  //   nombreConsult: any
  //   id: number;
  //   gender: string = "";
  //   Consultation: any
  //   ConsultationF: any
  //   consult: any
  //   constructor(public router: Router, public service: UserService, public menu: MenuController, public toastController: ToastController, private ar: ActivatedRoute) {
  //     ar.params.subscribe(val => {
  //       this.ngOnInit();
  //     })

  //   }
  //   public name = localStorage.getItem("name");

  ngOnInit() {
  }


  //     // this.service.getAllConsultationExpert().subscribe((params) => {
  //     //   this.Consultation = params; this.ConsultationF = params; this.consult = params
  //     //   console.log(this.Consultation)
  //     // })
  //   }

  //   here() {
  //     let id: number
  //     this.ar.paramMap.subscribe((params) => {
  //       id = +params.get('id')
  //       this.service.getDataExpert(id).subscribe(data => {
  //         this.user = data
  //         console.log("eee", this.user.image)
  //         if (this.user.image == null) {
  //           this.imagePath = "assets/123.jpg"
  //         }
  //         else {
  //           this.retrieveResponse = this.user;
  //           this.base64Data = this.retrieveResponse.image;
  //           this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
  //         }

  //       });

  //       console.log(this.user)

  //     });

  //   }
  //   async presentToast() {
  //     const toast = await this.toastController.create({
  //       message: 'Welcome Doctor' + " " + localStorage.getItem("name"),
  //       duration: 3000,
  //       position: 'top',
  //       cssClass: "customToast"
  //     });
  //     toast.present();
  //   }
  //   logout() {
  //     localStorage.removeItem('token');
  //     this.router.navigate(['login']);
  //     this.menu.close();
  //     localStorage.removeItem("id");
  //     localStorage.removeItem("name");
  //     localStorage.removeItem("email");
  //     localStorage.removeItem("role");

  //   }
  //   Historiques() {
  //     this.router.navigate(['listeConsultExpert']);
  //     this.menu.close();
  //   }
  //   notification() {
  //     this.router.navigate(['homeExpert']);
  //     this.menu.close();
  //   }
  //   parametre() {
  //     this.router.navigate(['parametre2']);
  //     this.menu.close();
  //   }
  //   profil() {
  //     this.router.navigate(['profilExpert']);
  //     this.menu.close();
  //   }
  // }
}
