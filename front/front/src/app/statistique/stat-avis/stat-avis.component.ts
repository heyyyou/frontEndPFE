import { Chart } from 'chart.js';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-stat-avis',
  templateUrl: './stat-avis.component.html',
  styleUrls: ['./stat-avis.component.scss'],
})
export class StatAvisComponent {

  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  nbrConsultAvec: any
  nbrConsultSans: any
  doughnutChart: any;
  avisEgaleAi1: any
  avisEgaleAi2: any
  avisEgaleAi3: any
  avisEgaleAi4: any
  avisEgaleAi5: any
  avisEgaleAi6: any
  avisEgaleAi7: any
  avisEgaleAi8: any
  avisEgaleAi9: any
  avisEgaleAi10: any
  avisEgaleAi11: any
  avisEgaleAi12: any


  avisdiffAi1: any
  avisdiffAi4: any
  avisdiffAi2: any
  avisdiffAi3: any
  avisdiffAi5: any
  avisdiffAi6: any
  avisdiffAi7: any
  avisdiffAi8: any
  avisdiffAi9: any
  avisdiffAi10: any
  avisdiffAi11: any
  avisdiffAi12: any

  lineChart: any;
  #bb68b4

  constructor(public service: UserService) { }


  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined.
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ngAfterViewInit() {

    this.doughnutChartMethod();
    this.lineChartMethod();

  }

  lineChartMethod() {
    this.service.getAllAvisegaleMOdel(1).subscribe(data => {
      this.avisEgaleAi1 = data
      this.service.getAllAvisegaleMOdel(2).subscribe(data => {
        this.avisEgaleAi2 = data
        this.service.getAllAvisegaleMOdel(3).subscribe(data => {
          this.avisEgaleAi3 = data
          this.service.getAllAvisegaleMOdel(4).subscribe(data => {
            this.avisEgaleAi4 = data
            this.service.getAllAvisegaleMOdel(5).subscribe(data => {
              this.avisEgaleAi5 = data
              this.service.getAllAvisegaleMOdel(6).subscribe(data => {
                this.avisEgaleAi6 = data
                this.service.getAllAvisegaleMOdel(7).subscribe(data => {
                  this.avisEgaleAi7 = data
                  this.service.getAllAvisegaleMOdel(8).subscribe(data => {
                    this.avisEgaleAi8 = data
                    this.service.getAllAvisegaleMOdel(9).subscribe(data => {
                      this.avisEgaleAi9 = data
                      this.service.getAllAvisegaleMOdel(10).subscribe(data => {
                        this.avisEgaleAi10 = data
                        this.service.getAllAvisegaleMOdel(11).subscribe(data => {
                          this.avisEgaleAi11 = data
                          this.service.getAllAvisegaleMOdel(12).subscribe(data => {
                            this.avisEgaleAi12 = data
                            this.service.getAllAvisdiffMOdel(1).subscribe(data => {
                              this.avisdiffAi1 = data
                              this.service.getAllAvisdiffMOdel(2).subscribe(data => {
                                this.avisdiffAi2 = data
                                this.service.getAllAvisdiffMOdel(3).subscribe(data => {
                                  this.avisdiffAi3 = data
                                  this.service.getAllAvisdiffMOdel(4).subscribe(data => {
                                    this.avisdiffAi4 = data
                                    this.service.getAllAvisdiffMOdel(5).subscribe(data => {
                                      this.avisdiffAi5 = data
                                      this.service.getAllAvisdiffMOdel(6).subscribe(data => {
                                        this.avisdiffAi6 = data
                                        this.service.getAllAvisdiffMOdel(7).subscribe(data => {
                                          this.avisdiffAi7 = data
                                          this.service.getAllAvisdiffMOdel(8).subscribe(data => {
                                            this.avisdiffAi8 = data
                                            this.service.getAllAvisdiffMOdel(9).subscribe(data => {
                                              this.avisdiffAi9 = data
                                              this.service.getAllAvisdiffMOdel(10).subscribe(data => {
                                                this.avisdiffAi10 = data
                                                this.service.getAllAvisdiffMOdel(11).subscribe(data => {
                                                  this.avisdiffAi11 = data
                                                  this.service.getAllAvisdiffMOdel(12).subscribe(data => {
                                                    this.avisdiffAi12 = data
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
                                                            data: [this.avisEgaleAi1, this.avisEgaleAi2, this.avisEgaleAi3, this.avisEgaleAi4, this.avisEgaleAi5, this.avisEgaleAi6, this.avisEgaleAi7, this.avisEgaleAi8, this.avisEgaleAi9, this.avisEgaleAi10, this.avisEgaleAi11, this.avisEgaleAi12], //{{nombreConsultation filter date}}
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
                                                            data: [this.avisdiffAi1, this.avisdiffAi2, this.avisdiffAi3, this.avisdiffAi4, this.avisdiffAi5, this.avisdiffAi6, this.avisdiffAi7, this.avisdiffAi8, this.avisdiffAi9, this.avisdiffAi10, this.avisdiffAi11, this.avisdiffAi12], //{{nombreConsultation filter date}}
                                                            spanGaps: false,
                                                          }
                                                        ]
                                                      }
                                                    });
                                                  });
                                                });
                                              });
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });

          });
        });

      });
    });

  }




  doughnutChartMethod() {
    this.service.ConsultavecAvis().subscribe(data => {
      this.nbrConsultAvec = data
      this.service.ConsultasansAvis().subscribe(data => {
        this.nbrConsultSans = data
        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
          type: 'doughnut',
          data: {
            labels: ['Consultation avec avis', 'Consultation sans avis'],
            datasets: [{
              label: '# of Votes',
              data: [this.nbrConsultAvec, this.nbrConsultSans],
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
      })
    })
  }

}
