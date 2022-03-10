import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss'],
})
export class StarsRatingComponent implements OnInit {

  @Output() shareRatingValue: EventEmitter<number> = new EventEmitter();
  currentValue: number = null;

  getValueSelected(value: number) {
    this.shareRatingValue.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }





}
