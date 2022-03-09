import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  currentRatingValue : number = null ;
  constructor() { }

  ngOnInit() {
  }
  showRating(rating){
    this.currentRatingValue =(rating);

  }
}
