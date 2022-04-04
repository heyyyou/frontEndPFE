import { Patient } from './../model/patient';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { id } from 'date-fns/locale';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  uploadImageData: any
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string;
  imageName: any;
  url: any;
  imagePath: string = null;
  user: any;
  id: number;
  gender: string = "";

  public form = [
    { val: 'HTA', isChecked: false },
    { val: 'Dyslipidémie', isChecked: false },
    { val: 'Tabac', isChecked: false },
    { val: 'Cancer', isChecked: false },
    { val: 'Diabète', isChecked: false }
  ];



  photo = 'https://i.pravatar.cc/150';
  patient: Patient;
  choix: any;
  ide: any;
  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectedMode = 'month-year';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  constructor(private router: Router, public actionSheetController: ActionSheetController, private menu: MenuController, private service: UserService) {
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

  ngOnInit() {

  }


  dateChanged(value) {
    this.dateValue = value; // one way binding that s why
    this.formattedString = format(parseISO(value), 'MMM d,yyyy');
    this.showPicker = false;
    console.log("formattedString", this.formattedString);

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

  getSelectedItem(selectedItem) {
    /* console.log(selectedItem);
     this.val = selectedItem;
     console.log(this.val)*/
    if (!selectedItem.isChecked === true) {
      this.choix = selectedItem.val;
      localStorage.setItem("item", this.choix)
      console.log(this.choix);
    } else if (selectedItem.isChecked === true) {
      localStorage.setItem("item", "nulll")


    }

  }
  ajouterPatient(f: NgForm) {
    console.log("jksdh", f);
    f.value.dateNaiss = this.formattedString
    console.log(this.form.values);
    f.value.antecedant = localStorage.getItem("item");
    console.log(f.value.antecedant)
    console.log("fffff", f.value);
    this.ide = localStorage.getItem("id");
    this.service.ajouterPatient(f.value, this.ide).subscribe(() => {
      this.router.navigate(["ListePatient"]);

    })
  }

  consultation() {
    this.router.navigate(['consultation']);
  }

}
