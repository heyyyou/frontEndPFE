import { Component, OnInit ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {
  @Output() shareRatingValue : EventEmitter<number> = new EventEmitter() ;
  currentValue: number = null ;
  constructor() { }

  ngOnInit() {}

  getValueSelected(value:number){
     this.shareRatingValue.emit(value) ;
  }

}
