import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profil-medcin',
  templateUrl: './profil-medcin.component.html',
  styleUrls: ['./profil-medcin.component.scss'],
})
export class ProfilMedcinComponent implements OnInit {
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

  constructor(public route: Router, private ar: ActivatedRoute,
    public actionSheetController: ActionSheetController, public service: UserService) {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })

  }


  ngOnInit(): void {
    let id: number
    this.ar.paramMap.subscribe((params) => {
      id = +params.get('id')
      this.service.getData(id).subscribe(data => {
        this.user = data
        console.log("eeeeeeeeee", this.user.nomPrenom)
        console.log(this.user.image)
        if (this.user.image == null) {
          this.imagePath = "assets/123.jpg"
        }
        else {
          this.retrieveResponse = this.user;
          this.base64Data = this.retrieveResponse.image;
          this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
        }

      });

      console.log(this.user)

    });

  }

  edit() {
    this.route.navigate(['edit'])
  }
  //   here() {
  //     let id: number
  //     this.ar.paramMap.subscribe((params) => {
  //       id = +params.get('id')
  //       this.service.getData(id).subscribe(data => {
  //         this.user = data
  //         console.log(this.user.image)
  //         if (this.user.image == null) {
  //           this.imagePath = "assets/123.jpg"
  //         }
  //         else {
  //           this.retrieveResponse = this.user;
  //           this.base64Data = this.retrieveResponse.image;
  //           this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
  //         }

  //       });

  //       console.log(this.user)

  //     });

  //   }
  // }

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
