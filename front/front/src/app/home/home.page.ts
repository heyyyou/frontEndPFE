import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperOptions, Pagination } from 'swiper';
import { ModalImageComponent } from '../modal-image/modal-image.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  config: SwiperOptions = {
    slidesPerView: 1.20,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: { clickable: true },


  }


  segment = 'all';
  users = [
    {
      id: 1,
      name: "chelly mariem",
      contry: "chebba",
      image: "assets/aq.png",
    },
    {
      id: 2,
      name: "chelly fatma",
      contry: "chebba"
    },
    {
      id: 3,
      name: "chelly sarra",
      contry: "chebba"
    },
  ]
    ;
  selected_users = null;
  img: any = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/empty.jpg"
  ]
  constructor(private modalCtrl: ModalController) { }

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
  openGallery() {
    console.log("opnened")
  }
}


