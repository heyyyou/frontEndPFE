import { Chart } from 'chart.js';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stat-consult',
  templateUrl: './stat-consult.component.html',
  styleUrls: ['./stat-consult.component.scss'],
})
export class StatConsultComponent {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  lineChart: any;

  constructor() { }
  ngAfterViewInit() {

    this.lineChartMethod();

  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Nombre de Consultations',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: '#ee87b3',
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
            label: 'Nombre de Consultations pathologiques ',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#3e64ff'
            ,
            borderColor: '#4bd2aa',
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

}
