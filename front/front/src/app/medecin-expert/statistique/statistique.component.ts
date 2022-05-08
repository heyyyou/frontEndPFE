import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss'],
})
export class StatistiqsueComponent implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  demandeRepondu1: any
  demandeRepondu2: any
  demandeRepondu3: any

  demandeRepondu4: any
  demandeRepondu5: any
  demandeRepondu6: any
  demandeRepondu7: any
  demandeRepondu8: any
  demandeRepondu9: any
  demandeRepondu10: any
  demandeRepondu11: any
  demandeRepondu12: any

  demandeAll1: any
  demandeAll2: any
  demandeAll3: any

  demandeAll4: any
  demandeAll5: any
  demandeAll6: any
  demandeAll7: any
  demandeAll8: any
  demandeAll9: any
  demandeAll10: any
  demandeAll11: any
  demandeAll12: any

  constructor(public service: UserService) { }
  ngAfterViewInit() {

    this.lineChartMethod();

  }
  lineChartMethod() {
    this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 1).subscribe(data => {
      this.demandeRepondu1 = data
      this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 2).subscribe(data => {
        this.demandeRepondu2 = data
        this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 3).subscribe(data => {
          this.demandeRepondu3 = data
          this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 4).subscribe(data => {
            this.demandeRepondu4 = data
            this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 5).subscribe(data => {
              this.demandeRepondu5 = data
              this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 6).subscribe(data => {
                this.demandeRepondu6 = data
                this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 7).subscribe(data => {
                  this.demandeRepondu7 = data
                  this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 8).subscribe(data => {
                    this.demandeRepondu8 = data
                    this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 9).subscribe(data => {
                      this.demandeRepondu9 = data
                      this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 10).subscribe(data => {
                        this.demandeRepondu10 = data
                        this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 11).subscribe(data => {
                          this.demandeRepondu11 = data
                          this.service.getAllDemandesRepondueParExpertByMonth(parseInt(localStorage.getItem("id")), 12).subscribe(data => {
                            this.demandeRepondu12 = data
                            this.service.getAllDemandesParMonth(1).subscribe(data => {
                              this.demandeAll1 = data
                              this.service.getAllDemandesParMonth(2).subscribe(data => {
                                this.demandeAll2 = data
                                this.service.getAllDemandesParMonth(3).subscribe(data => {
                                  this.demandeAll3 = data
                                  this.service.getAllDemandesParMonth(4).subscribe(data => {
                                    this.demandeAll4 = data
                                    this.service.getAllDemandesParMonth(5).subscribe(data => {
                                      this.demandeAll5 = data
                                      this.service.getAllDemandesParMonth(6).subscribe(data => {
                                        this.demandeAll6 = data
                                        this.service.getAllDemandesParMonth(7).subscribe(data => {
                                          this.demandeAll7 = data
                                          this.service.getAllDemandesParMonth(8).subscribe(data => {
                                            this.demandeAll8 = data
                                            this.service.getAllDemandesParMonth(9).subscribe(data => {
                                              this.demandeAll9 = data
                                              this.service.getAllDemandesParMonth(10).subscribe(data => {
                                                this.demandeAll10 = data
                                                this.service.getAllDemandesParMonth(11).subscribe(data => {
                                                  this.demandeAll11 = data
                                                  this.service.getAllDemandesParMonth(12).subscribe(data => {
                                                    this.demandeAll12 = data
                                                    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
                                                      type: 'line',
                                                      data: {
                                                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
                                                        datasets: [
                                                          {
                                                            label: 'Demande répondue',
                                                            fill: false,
                                                            lineTension: 0.1,
                                                            backgroundColor: 'rgba(75,192,192,0.4)',
                                                            borderColor: 'rgba(75,192,192,1)',
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
                                                            data: [this.demandeRepondu1, this.demandeRepondu2, this.demandeRepondu3, this.demandeRepondu4, this.demandeRepondu5, this.demandeRepondu6, this.demandeRepondu7, this.demandeRepondu8, this.demandeRepondu9, this.demandeRepondu10, this.demandeRepondu11, this.demandeRepondu12], //{{nombreConsultation filter date}}
                                                            spanGaps: false,
                                                          },
                                                          {
                                                            label: 'Demande non répondue',
                                                            fill: false,
                                                            lineTension: 0.1,
                                                            backgroundColor: '#3e64ff',
                                                            borderColor: '#3e64ff',
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
                                                            data: [this.demandeAll1, this.demandeAll2, this.demandeAll3, this.demandeAll4, this.demandeAll5, this.demandeAll6, this.demandeAll7, this.demandeAll8, this.demandeAll9, this.demandeAll10, this.demandeAll11, this.demandeAll12], //{{nombreConsultation filter date}}
                                                            spanGaps: false,
                                                          }
                                                        ]
                                                      }
                                                    });
                                                  })
                                                });
                                              })
                                            });
                                          })
                                        });
                                      })
                                    });
                                  })
                                });
                              })
                            });
                          });
                        })
                      });
                    })
                  });
                });
              })
            });
          })
        });
      });
    })

  }





  ngOnInit() { }


}
