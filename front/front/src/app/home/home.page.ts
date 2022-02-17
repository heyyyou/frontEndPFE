import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import { ModalImageComponent } from '../modal-image/modal-image.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  config: SwiperOptions = {
    slidesPerView: 1.35,
    spaceBetween: 15,
    centeredSlides: true
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
  constructor(private modalCtrl: ModalController) { }

  async openPreview(img) {
    const modal = await this.modalCtrl.create({
      component: ModalImageComponent,
      componentProps: {
        img
      },
      cssClass: 'transparent-modal'
    });
    modal.present();

  }
}


