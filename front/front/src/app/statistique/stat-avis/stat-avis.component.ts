import { Chart } from 'chart.js';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stat-avis',
  templateUrl: './stat-avis.component.html',
  styleUrls: ['./stat-avis.component.scss'],
})
export class StatAvisComponent {

  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;


  doughnutChart: any;

  lineChart: any;
  #bb68b4

  constructor() { }


  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined.
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ngAfterViewInit() {

    this.doughnutChartMethod();
    this.lineChartMethod();

  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Avis = AIModel',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: '#bb68b4',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1, 2, 3, 1, 2, 5, 40, 10, 5, 50, 10, 15], //{{nombreConsultation filter date}}
            spanGaps: false,
          },
          {
            label: 'Avis # AIModel ',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#bbb068'
            ,
            borderColor: '#bbb068',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#3e64ff',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#3e64ff',
            pointHoverBorderColor: '#3e64ff',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0.5, 0.2, 0.3, 0, 1, 3, 20, 5, 4, 30, 5, 10], //{{nombreConsultation filter date}}
            spanGaps: false,
          }
        ]
      }
    });
  }




  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Consultation avec avis', 'Consultation sans avis'],
        datasets: [{
          label: '# of Votes',
          data: [20, 5],
          backgroundColor: [
            '#0091ff',
            '#468000',
          ],
          hoverBackgroundColor: [
            '#0091ff',
            '#468000',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

}
