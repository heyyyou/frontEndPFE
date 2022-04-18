import { ActionSheetController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profil-expert',
  templateUrl: './edit-profil-expert.component.html',
  styleUrls: ['./edit-profil-expert.component.scss'],
})
export class EditProfilExpertComponent implements OnInit {
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
    public service: UserService, private router: Router) { }

  here() {
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
    ;
    this.service.updatedata(parseInt(localStorage.getItem("id")), f.value).subscribe(() => {
      console.log(f.value)
      console.log(this.selectedFile);
      this.uploadImageData = new FormData();
      this.uploadImageData.append('imageFile', this.selectedFile);
      console.log(this.selectedFile)
      this.service.updateImage(parseInt(localStorage.getItem("id")), this.uploadImageData).subscribe(

        err => {
          alert(" proléme dans modifier l'image ")
        }
      );
      this.router.navigate(['profilExpert'])

    });
  }




}




