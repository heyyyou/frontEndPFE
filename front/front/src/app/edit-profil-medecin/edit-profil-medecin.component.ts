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
  user: any;
  id: any;

  constructor(public actionSheetController: ActionSheetController, private ar: ActivatedRoute,
    public service: UserService, private router: Router) { }

  ngOnInit() {
    let id: number
    this.ar.paramMap.subscribe((params) => {
      id = +params.get('id')
      this.service.getData(id).subscribe(data => {
        this.user = data;
        console.log(this.user)

      });
    })
  }
  modifierProfil(f: NgForm) {
    this.id = localStorage.getItem("id")
    this.service.updatedata(this.id, f.value).subscribe(() => {
      this.router.navigate(["/profil"]);
      console.log("id =" + this.id);
      console.log(this.user)
    });
  }



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



}
