import { Chart } from 'chart.js';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-stat-consult',
  templateUrl: './stat-consult.component.html',
  styleUrls: ['./stat-consult.component.scss'],
})
export class StatConsultComponent {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  lineChart: any;

  consultation: any
  ConsultationF: any;
  id: any
  nbrConsultation: any
  consult: any
  nbrConsultation1: any
  nbrConsultation2: any
  nbrConsultation3: any
  nbrConsultation4: any
  nbrConsultation5: any
  nbrConsultation6: any
  nbrConsultation7: any
  nbrConsultation8: any
  nbrConsultation9: any
  nbrConsultation11: any
  nbrConsultation10: any
  nbrConsultation12: any


  constructor(private service: UserService) { }
  ngAfterViewInit() {

    this.lineChartMethod();

  }

  lineChartMethod() {

    this.service.getAllConsultMonth(1).subscribe((params) => {
      this.consultation = params; this.ConsultationF = params; this.consult = params
      this.nbrConsultation1 = this.consultation.length
      this.service.getAllConsultMonth(2).subscribe((params) => {
        this.consultation = params; this.ConsultationF = params; this.consult = params
        this.nbrConsultation2 = this.consultation.length
        this.service.getAllConsultMonth(3).subscribe((params) => {
          this.consultation = params; this.ConsultationF = params; this.consult = params
          this.nbrConsultation3 = this.consultation.length
          this.service.getAllConsultMonth(4).subscribe((params) => {
            this.consultation = params; this.ConsultationF = params; this.consult = params
            this.nbrConsultation4 = this.consultation.length
            this.service.getAllConsultMonth(5).subscribe((params) => {
              this.consultation = params; this.ConsultationF = params; this.consult = params
              this.nbrConsultation5 = this.consultation.length
              this.service.getAllConsultMonth(6).subscribe((params) => {
                this.consultation = params; this.ConsultationF = params; this.consult = params
                this.nbrConsultation6 = this.consultation.length
                this.service.getAllConsultMonth(7).subscribe((params) => {
                  this.consultation = params; this.ConsultationF = params; this.consult = params
                  this.nbrConsultation7 = this.consultation.length
                  this.service.getAllConsultMonth(8).subscribe((params) => {
                    this.consultation = params; this.ConsultationF = params; this.consult = params
                    this.nbrConsultation8 = this.consultation.length
                    this.service.getAllConsultMonth(9).subscribe((params) => {
                      this.consultation = params; this.ConsultationF = params; this.consult = params
                      this.nbrConsultation9 = this.consultation.length
                      this.service.getAllConsultMonth(10).subscribe((params) => {
                        this.consultation = params; this.ConsultationF = params; this.consult = params
                        this.nbrConsultation10 = this.consultation.length
                        this.service.getAllConsultMonth(11).subscribe((params) => {
                          this.consultation = params; this.ConsultationF = params; this.consult = params
                          this.nbrConsultation11 = this.consultation.length
                          this.service.getAllConsultMonth(12).subscribe((params) => {
                            this.consultation = params; this.ConsultationF = params; this.consult = params
                            this.nbrConsultation12 = this.consultation.length

                            this.lineChart = new Chart(this.lineCanvas.nativeElement, {
                              type: 'line',
                              data: {
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
                                datasets: [
                                  {
                                    label: 'Nombre de Consultations pathologiques',
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
                                    data: [this.nbrConsultation1, this.nbrConsultation2, this.nbrConsultation3, this.nbrConsultation4, this.nbrConsultation5, this.nbrConsultation6, this.nbrConsultation7, this.nbrConsultation8, this.nbrConsultation9, this.nbrConsultation10, this.nbrConsultation11, this.nbrConsultation12], //{{nombreConsultation filter date}}
                                    spanGaps: false,
                                  },
                                  {
                                    label: 'Nombre de Consultations  ',
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
    )
  }
}
