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


  user: any;
  id: any;

  constructor(public actionSheetController: ActionSheetController, private ar: ActivatedRoute,
    public service: UserService, private router: Router) { }

  ngOnInit() {
    let id: number
    this.ar.paramMap.subscribe((params) => {
      id = +params.get('id')
      this.service.getDataExpert(id).subscribe(data => {
        this.user = data;
        console.log(this.user)


      });
    })
  }
  modifierProfil(f: NgForm) {
    this.id = localStorage.getItem("id")
    this.service.updatedataExpert(this.id, f.value).subscribe(() => {
      this.router.navigate(["/profilExpert"]);
      console.log("id =" + this.id);
      console.log(this.user)
    });
  }



  f: NgForm



  pickImageFromGallery() {
    const options: ImageOptions = {
      source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl
    };
    Camera.getPhoto(options).then((result) => {
      this.base64 = result.dataUrl;
      localStorage.setItem("image", this.base64)

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



}
