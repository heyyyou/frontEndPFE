import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swiper, { Pagination, SwiperOptions } from 'swiper';
import SwiperCore, { Zoom } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Zoom, Pagination])
@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss'],
})
export class ModalImageComponent implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent
  @Input() img: String;
  config: SwiperOptions = {
    zoom: {
      maxRatio: 10,
      minRatio: 0.2,

    }

  }

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }
  zoom(zoomIn) {
    const zoom = this.swiper.swiperRef.zoom;
    zoomIn ? zoom.in() : zoom.out();

  }




  close() {
    this.modalCtrl.dismiss();
  }
}
