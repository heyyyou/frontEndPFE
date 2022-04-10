import { Patient } from './../model/patient';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { id } from 'date-fns/locale';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
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
  id: number;
  gender: string = "";

  // public form = [
  //   { val: 'HTA', isChecked: false },
  //   { val: 'Dyslipidémie', isChecked: false },
  //   { val: 'Tabac', isChecked: false },
  //   { val: 'Cancer', isChecked: false },
  //   { val: 'Diabète', isChecked: false }
  // ];



  photo = 'https://i.pravatar.cc/150';
  patient: Patient;
  choix: any;
  ide: any;
  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectedMode = 'month-year';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd');
  formattedString = '';
  constructor(private router: Router, public actionSheetController: ActionSheetController, private menu: MenuController, private service: UserService, private ar: ActivatedRoute) {
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
    this.getAntecedant();
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
    // console.log(this.form.values);
    f.value.antecedant = localStorage.getItem("item");
    console.log(this.getSelectedItem(f.value));
    f.value.antecedant = this._antecedantlist.filter(x => x.isSelected === true).map(x => x.name).join(",").toString();
    console.log(f.value.antecedant);

    console.log("fffff", f.value);


    this.ide = parseInt(localStorage.getItem("id"));
    this.service.ajouterPatient(f.value, this.ide).subscribe(() => {


      err => {
        alert(" proléme dans modifier l'image ")
      }

      this.router.navigate(["ListePatient"])

    })
  }



  consultation() {
    this.router.navigate(['consultation']);
  }



  // here() {
  //   let id: number
  //   this.ar.paramMap.subscribe((params) => {
  //     id = +params.get('id')
  //     this.service.getData(id).subscribe(data => {
  //       this.user = data
  //       console.log(this.user.image)
  //       if (this.user.image == null) {
  //         this.imagePath = "assets/123.jpg"
  //       }
  //       else {
  //         this.retrieveResponse = this.user;
  //         this.base64Data = this.retrieveResponse.image;
  //         this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
  //       }

  //     });

  //     console.log(this.user)

  //   });

  // }






  f: NgForm


  // onSelectFile(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url
  //     this.selectedFile = event.target.files[0];
  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.imagePath = reader.result;
  //     }
  //   }
}
class antecedant {
  name: String;
  isSelected: boolean
}

  //   modifierProfile(f: NgForm) {

  //     this.service.updatedataGeneraliste(parseInt(localStorage.getItem("id")), f.value).subscribe(() => {
  //       console.log(f.value)
  //       console.log(this.selectedFile);
  //       this.uploadImageData = new FormData();
  //       this.uploadImageData.append('imageFile', this.selectedFile);
  //       console.log(this.selectedFile)
  //       this.service.updateImageGen(parseInt(localStorage.getItem("id")), this.uploadImageData).subscribe(

  //         err => {
  //           alert(" proléme dans modifier l'image ")
  //         }
  //       );
  //       this.router.navigate(['profil'])

  //     });
  //   }




  // }


