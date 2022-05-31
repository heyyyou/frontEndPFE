import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-consult-expert',
  templateUrl: './liste-consult-expert.component.html',
  styleUrls: ['./liste-consult-expert.component.scss'],
})
export class ListeConsultExpertComponent implements OnInit {
  currentRatingValue: number = null;
  public avisExpert;
  Consultation: any[]
  ConsultationF: any
  base64: string;
  user: any
  name: any
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
  consult: any
  idExp: any
  constructor(public ConsultationMedService: ConsultationMedService,
    public photoService: PhotoService, private ar: ActivatedRoute, public service: UserService, public router: Router, public alertController: AlertController) { }

  newConsultation() {
    this.router.navigate(["consultation"])
  }
  ngOnInit() {
    this.here()
    this.idExp = parseInt(localStorage.getItem("id"))

    this.service.getAllConsultationExpert().subscribe((params) => {

      this.Consultation = params; this.ConsultationF = params; this.consult = params
      console.log("sssss", this.Consultation)
    })
  }
  showRating(rating) {
    this.currentRatingValue = (rating);

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
          this.imagePath = "http://localhost:8080/expert/getImage/" + this.user.id;

        }
      });

      console.log(this.user)

    });

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
    this.router.navigate(["DetailsConsultExpert"])
  }


}





