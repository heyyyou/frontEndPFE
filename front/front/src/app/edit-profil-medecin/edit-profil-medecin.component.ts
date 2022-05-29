import { format } from 'date-fns';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-profil-medecin',
  templateUrl: './edit-profil-medecin.component.html',
  styleUrls: ['./edit-profil-medecin.component.scss'],
})
export class EditProfilMedecinComponent implements OnInit {

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
  constructor(public actionSheetController: ActionSheetController, private ar: ActivatedRoute,
    public service: UserService, private router: Router, public picker: ImagePicker) {

  }

  here() {
    let id: number
    this.ar.paramMap.subscribe((params) => {
      id = +params.get('id')
      this.service.getData(id).subscribe(data => {
        this.user = data
        console.log(this.user.image)
        if (this.user.image == null) {
          this.imagePath = "assets/123.jpg"
        }
        else {
          this.imagePath = "http://localhost:8080/medecin/getImage/" + this.user.id;

        }

      });

      console.log(this.user)

    });

  }
  ngOnInit() { this.here(); }


  // modifierProfil(f: NgForm) {
  //   this.id = localStorage.getItem("id")
  //   this.service.updatedataExpert(this.id, f.value).subscribe(() => {
  //     this.router.navigate(["/profilExpert"]);
  //     console.log("id =" + this.id);
  //     console.log(this.user)
  //   });
  // }



  f: NgForm


  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedFile = event.target.files[0];
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imagePath = reader.result;
      }
    }
  }

  modifierProfile(f: NgForm) {

    this.service.updatedataGeneraliste(parseInt(localStorage.getItem("id")), f.value).subscribe(() => {
      console.log(f.value)
      console.log(this.selectedFile);
      this.uploadImageData = new FormData();
      this.uploadImageData.append('imageFile', this.selectedFile);
      console.log(this.selectedFile)
      this.service.updateImageGen(parseInt(localStorage.getItem("id")), this.uploadImageData).subscribe(

        err => {
          alert(" proléme dans modifier l'image ")
        }
      );
      setTimeout(() => {
        this.router.navigate(['profil']);
      }, 1000);

      // this.router.navigate(['profil']).then(() => {
      //   window.location.reload();
      // });

    });
  }


  // pickImageFromGallery() {
  //   const options: ImageOptions = {
  //     source: CameraSource.Photos,
  //     resultType: CameraResultType.DataUrl
  //   };
  //   Camera.getPhoto(options).then((result) => {
  //     this.base64 = result.dataUrl;
  //     localStorage.setItem("image", this.base64)

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



}
