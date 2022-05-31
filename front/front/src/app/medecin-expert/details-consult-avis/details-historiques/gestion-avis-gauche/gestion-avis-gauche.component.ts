import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModalImageComponent } from 'src/app/modal-image/modal-image.component';
import { SwiperOptions } from 'swiper';
import { ConsultationMedService } from 'src/app/services/consultation-med.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gestion-avis-gauche',
  templateUrl: './gestion-avis-gauche.component.html',
  styleUrls: ['./gestion-avis-gauche.component.scss'],
})
export class GestionAvisGaucheComponent implements OnInit {
  idConsult: any;
  url: string = "http://localhost:8080/consultation/imageGauche1/";

  idavisExpert: any;
  idPatient: any;
  base64Data: any;
  avisExpert: any;
  private sub: any;
  retrieveResponse: any;
  imagePath: any; //string=null;
  idAutoDetection: any
  patient: any
  consultation: any
  images: any[] = [];
  base64 = '';
  constructor(public consultationMedService: ConsultationMedService,
    private router: Router, public loadingController: LoadingController, private modalCtrl: ModalController, private toastController: ToastController,
    public alertController: AlertController, private route: ActivatedRoute, public service: UserService) {
  }

  async openPreview(imge) {
    const modal = await this.modalCtrl.create({
      component: ModalImageComponent,
      componentProps: {
        imge
      },
      cssClass: 'transparent-modal'
    });
    modal.present();

  }

  config: SwiperOptions = {

    slidesPerView: 1.20,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: { clickable: true },


  }
  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idConsult = +params['idConsult'];
      this.idPatient = +params['cin'];
    })
    this.service.getConsultationID(parseInt(localStorage.getItem("id")), this.idConsult, this.idPatient).subscribe((params => {
      this.consultation = params;
      console.log(this.consultation)


      this.url = this.url + this.consultation.id;
      this.images[0] = this.url;
    })

    )
  }
}
