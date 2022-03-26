import { Component, OnInit } from '@angular/core';
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
  base64: string;
  user: any;
  constructor(public route: Router, private ar: ActivatedRoute, public service: UserService,
    public actionSheetController: ActionSheetController) { }
  here() {
    let id: number
    this.ar.paramMap.subscribe((params) => {
      id = +params.get('id')
      this.service.getData(id).subscribe(data => {
        this.user = data;
        console.log(this.user)

      });
    })
  }
  ngOnInit() { this.here(); }
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




  edit() {
    this.route.navigate(['EditExpert'])
  }
}

