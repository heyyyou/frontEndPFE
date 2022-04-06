import { UserService } from 'src/app/services/user.service';
import { StarsComponent } from './../rating/stars/stars.component';
import { ConsultationComponent } from './../consultation/consultation.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from './../services/photo.service';
import { ConsultationMedService } from './../services/consultation-med.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-liste-consultation',
  templateUrl: './liste-consultation.component.html',
  styleUrls: ['./liste-consultation.component.scss'],
})
export class ListeConsultationComponent implements OnInit {
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
  user: any;
  id: number;
  gender: string = "";
  public name = localStorage.getItem("name");
  currentRatingValue: number = null;
  public avisExpert;
  public images = localStorage.getItem("image")
  constructor(public ConsultationMedService: ConsultationMedService, public menu: MenuController,
    public PhotoService: PhotoService, public router: Router, public alertController: AlertController, public service: UserService, private ar: ActivatedRoute) { }

  newConsultation() {
    this.router.navigate(["consultation"])
  }
  ngOnInit() {
    let id: number
    this.ar.paramMap.subscribe((params) => {
      id = +params.get('id')
      this.service.getData(id).subscribe(data => {
        this.user = data
        console.log(this.user.image)
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
  showRating(rating) {
    this.currentRatingValue = (rating);

  }
  listeAvis() {
    this.router.navigate(["AvisnonExpert"]);
    this.menu.close();

  }
  statistique() {
    this.router.navigate(["statistique"]);
    this.menu.close();

  }
  parametre() {
    this.router.navigate(['parametre']);
    this.menu.close();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    this.menu.close();
    localStorage.clear();
  }
  patient() {
    this.router.navigate(['ListePatient']);
    this.menu.close();
  }
  profil() {
    this.router.navigate(['profil']);
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



  async suppConsultation() {


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Êtes-vous sûr de vouloir supprimer cette consultation ? ',

      message: '',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log("dismiss")
        }
      },
      {
        text: 'Valider',
        handler: () => {
          //api suppression consultation
        }
      }
      ]


    });


    await alert.present();



  }





  openDetail() {
    this.router.navigate(["consultationAvis"])
  }
  editConsultation() {
    this.router.navigate(["consultation"]) // api update consultation
  }

}





