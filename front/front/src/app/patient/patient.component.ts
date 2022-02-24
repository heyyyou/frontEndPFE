import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  photo = 'https://i.pravatar.cc/150';

  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectedMode = 'month-year';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'
  formattedString = '';
  constructor(private router: Router) {
    this.setToday();
  }
  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd')), 'MMM d,yyyy');
  }

  ngOnInit() { }
  dateChanged(value) {
    this.dateValue = value // one way binding that s why
    this.formattedString = format(parseISO(value), 'MMM d,yyyy');
    this.showPicker = false;
  }

  base64: string = "";

  pickImageFromGallery() {
    var options: ImageOptions = {
      source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl
    }
    Camera.getPhoto(options).then((result) => {
      this.base64 = result.dataUrl;
    }, (err) => {
      alert(err);

    })
  }



  modifier() {

  }

  consultation() {
    this.router.navigate(['consultation'])
  }
}
