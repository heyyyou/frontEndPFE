import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis-expert',
  templateUrl: './avis-expert.component.html',
  styleUrls: ['./avis-expert.component.scss'],
})
export class AvisExpertComponent implements OnInit {

  constructor() { }
  avis_Expert = [
    {
      id: 111,
      avis: "le malade est sain",


    }
  ]


  ngOnInit() { }

}
