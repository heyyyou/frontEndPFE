import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ActionSheetController, MenuController, ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { id } from 'date-fns/locale';
import { threadId } from 'worker_threads';
import { Patient } from 'src/app/model/patient';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss'],
})
export class EditPatientComponent implements OnInit {

  _antecedantlist: antecedant[];

  getAntecedant() {
    this._antecedantlist = [
      { name: 'HTA', isSelected: false },
      { name: 'Dyslipidémie', isSelected: false },
      { name: 'Tabac', isSelected: false },
      { name: 'Cancer', isSelected: false },
      { name: 'Diabète', isSelected: false },
    ]


  }
  onchange() {
    console.log(this._antecedantlist);

  }

  patientid: any;
  nbrPatient: any
  name: any
  id: any
  cin: any
  base64: string;
  uploadImageData: any
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string;
  imageName: any;
  url: any;
  imagePath: any; //string=null;
  user: any;
  private sub: any;

  gender: string = "";





  photo = 'https://i.pravatar.cc/150';
  patient: Patient;
  choix: any;
  ide: any;
  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectedMode = 'month-year';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  constructor(public actionSheetController: ActionSheetController, private menu: MenuController, private service: UserService, private ar: ActivatedRoute, private router: Router, private route: ActivatedRoute, public modalCtrl: ModalController) {
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

    this.sub = this.route.params.subscribe(params => {
      this.cin = +params['id'];
      this.service.patientID(parseInt(localStorage.getItem("id")), this.cin).subscribe((params) => {
        this.patientid = params;
        console.log(params);
        this.getAntecedant();
      }
      )
    }
    )
  }

  dateChanged(value) {
    this.dateValue = value; // one way binding that s why
    this.formattedString = format(parseISO(value), 'MMM d,yyyy');
    this.showPicker = false;
    console.log("formattedString", this.formattedString);

  }



  // pickImageFromGallery() {
  //   const options: ImageOptions = {
  //     source: CameraSource.Photos,
  //     resultType: CameraResultType.DataUrl
  //   };
  //   Camera.getPhoto(options).then((result) => {
  //     this.base64 = result.dataUrl;
  //   }, (err) => {
  //     alert(err);

  //   });
  // }
  // public async showActionSheet() {
  //   const actionSheet = await this.actionSheetController.create({
  //     buttons: [{
  //       text: 'Choisir une photo existante',
  //       role: 'destructive',
  //       icon: 'camera',

  //       handler: () => {
  //         this.pickImageFromGallery();
  //       }
  //     },
  //     {
  //       text: 'Supprimer photo',
  //       icon: 'trash',
  //       role: 'update',
  //       handler: () => {
  //         // Nothing to do, action sheet is automatically closed
  //       }


  //     }]
  //   });
  //   await actionSheet.present();
  // }







  updatePatient(f: NgForm) {
    this.sub = this.route.params.subscribe(params => {
      this.cin = +params['id'];
      console.log("jksdh", f);
      f.value.dateNaiss = this.formattedString
      // console.log(this.form.values);


      f.value.antecedant = this._antecedantlist.filter(x => x.isSelected === true).map(x => x.name).join(",").toString();
      console.log(f.value.antecedant);

      console.log("fffff", f.value);

      f.value.cin = this.cin
      console.log(f.value.cin)
      this.ide = parseInt(localStorage.getItem("id"));
      console.log(this.cin);

      this.service.updatepatient(this.ide, this.cin, f.value).subscribe(() => {


        err => {
          alert(" proléme dans modifier l'image ")
        }

        this.router.navigate(["ListePatient"])

      })
    })
  }



  consultation() {
    this.router.navigate(['consultation']);
  }








}
class antecedant {
  name: String;
  isSelected: boolean
}


