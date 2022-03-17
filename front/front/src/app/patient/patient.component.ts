import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ActionSheetController, MenuController } from '@ionic/angular';

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
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  constructor(private router: Router, public actionSheetController: ActionSheetController, private menu: MenuController) {
    this.setToday();
  }
  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd')), 'MMM d,yyyy');
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() { }
  dateChanged(value) {
    this.dateValue = value; // one way binding that s why
    this.formattedString = format(parseISO(value), 'MMM d,yyyy');
    this.showPicker = false;
  }

  base64 = '';

  pickImageFromGallery() {
    const options: ImageOptions = {
      source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl
    };
    Camera.getPhoto(options).then((result) => {
      this.base64 = result.dataUrl;
    }, (err) => {
      alert(err);

    });
  }
  public async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Choisir une photo existante',
        role: 'destructive',
        icon: 'camera',

        handler: () => {
          this.pickImageFromGallery();
        }
      },
      {
        text: 'Supprimer photo',
        icon: 'trash',
        role: 'update',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }


      }]
    });
    await actionSheet.present();
  }



  modifier() {

  }

  consultation() {
    this.router.navigate(['consultation']);
  }
  ajouter() {
    this.router.navigate(["ListePatient"]);
    console.log("jksdh")
  }
}
