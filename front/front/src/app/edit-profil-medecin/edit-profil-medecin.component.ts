import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profil-medecin',
  templateUrl: './edit-profil-medecin.component.html',
  styleUrls: ['./edit-profil-medecin.component.scss'],
})
export class EditProfilMedecinComponent implements OnInit {
  base64: string;

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() { }
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
