import { Chart } from 'chart.js';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-stat-patient',
  templateUrl: './stat-patient.component.html',
  styleUrls: ['./stat-patient.component.scss'],
})
export class StatPatientComponent {
  nbrPatientSupp: any
  nbrPatientInf: any
  PatientMois1: any
  PatientMois2: any
  PatientMois3: any
  PatientMois4: any
  PatientMois5: any
  PatientMois6: any
  PatientMois7: any
  PatientMois8: any
  PatientMois9: any
  PatientMois10: any
  PatientMois11: any
  PatientMois12: any

  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  constructor(public service: UserService) { }


  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined.
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ngAfterViewInit() {

    this.doughnutChartMethod();
    this.lineChartMethod();

  }

  doughnutChartMethod() {
    this.service.getAgeSup50().subscribe(data => {
      this.nbrPatientSupp = data
      console.log("dsds", this.nbrPatientSupp);
      this.service.getAgeInf50().subscribe(data => {
        this.nbrPatientInf = data
        console.log("dsds", this.nbrPatientInf);

        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
          type: 'doughnut',
          data: {
            labels: ['Nombre des patients>50', 'Nombre des patients<50'],
            datasets: [{
              label: '# of Votes',
              data: [this.nbrPatientSupp, this.nbrPatientInf],
              backgroundColor: [
                '#FFCE56',
                '#FF6384',
              ],
              hoverBackgroundColor: [
                '#FFCE56',
                '#FF6384',
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


  lineChartMethod() {
    this.service.getNouvPat(1).subscribe(data => {
      this.PatientMois1 = data
      console.log("dsdsssssssssssssssssssss", this.nbrPatientSupp);
      this.service.getNouvPat(2).subscribe(data => {
        this.PatientMois2 = data
        console.log("dsds", this.nbrPatientSupp);
        this.service.getNouvPat(3).subscribe(data => {
          this.PatientMois3 = data
          console.log("dsds", this.nbrPatientSupp);
          this.service.getNouvPat(4).subscribe(data => {
            this.PatientMois4 = data
            console.log("dsds", this.nbrPatientSupp)
            this.service.getNouvPat(5).subscribe(data => {
              this.PatientMois5 = data
              console.log("dsssqsqsqssqds", this.nbrPatientSupp)
              this.service.getNouvPat(6).subscribe(data => {
                this.PatientMois6 = data
                console.log("dsds", this.nbrPatientSupp)
                this.service.getNouvPat(7).subscribe(data => {
                  this.PatientMois7 = data
                  console.log("dsds", this.nbrPatientSupp)
                  this.service.getNouvPat(8).subscribe(data => {
                    this.PatientMois8 = data
                    console.log("dsds", this.nbrPatientSupp)
                    this.service.getNouvPat(9).subscribe(data => {
                      this.PatientMois9 = data
                      console.log("dsds", this.nbrPatientSupp)
                      this.service.getNouvPat(10).subscribe(data => {
                        this.PatientMois10 = data
                        console.log("dsds", this.nbrPatientSupp)
                        this.service.getNouvPat(11).subscribe(data => {
                          this.PatientMois11 = data
                          console.log("dsds", this.nbrPatientSupp)
                          this.service.getNouvPat(12).subscribe(data => {
                            this.PatientMois12 = data
                            console.log("dsds", this.nbrPatientSupp)
                            this.lineChart = new Chart(this.lineCanvas.nativeElement, {
                              type: 'line',
                              data: {
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
                                datasets: [
                                  {
                                    label: 'Nouveaux Patients',
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
                                    data: [this.PatientMois1, this.PatientMois2, this.PatientMois3, this.PatientMois4, this.PatientMois5, this.PatientMois6, this.PatientMois7, this.PatientMois8, this.PatientMois9, this.PatientMois10, this.PatientMois11, this.PatientMois12], //{{nombreConsultation filter date}}
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

  }
}




