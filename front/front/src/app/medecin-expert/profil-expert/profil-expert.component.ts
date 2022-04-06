import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil-expert',
  templateUrl: './profil-expert.component.html',
  styleUrls: ['./profil-expert.component.scss'],
})
export class ProfilExpertComponent implements OnInit {
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
  base64: string;

  constructor(public route: Router, private ar: ActivatedRoute, public service: UserService,
    public actionSheetController: ActionSheetController) {
    let id: number
    this.ar.paramMap.subscribe((params) => {
      id = +params.get('id')
      this.service.getDataExpert(id).subscribe(data => {
        this.user = data
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

  ngOnInit() {
    let id: number
    this.ar.paramMap.subscribe((params) => {
      id = +params.get('id')
      this.service.getDataExpert(id).subscribe(data => {
        this.user = data
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
    this.service.updatedata(this.id, f.value).subscribe(() => {
      console.log(f.value)
      console.log(this.selectedFile);
      this.uploadImageData = new FormData();
      this.uploadImageData.append('imageFile', this.selectedFile);
      console.log(this.selectedFile)
      this.service.updateImage(this.id, this.uploadImageData).subscribe(

        err => {
          alert(" proléme dans modifier l'image ")
        }
      );
      this.route.navigate(['/PageProfile/' + this.id])

    });
  }

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




  edit() {
    this.route.navigate(['EditExpert'])
  }
}

