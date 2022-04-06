import { Component, Directive, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-signupexpert',
  templateUrl: './signupexpert.component.html',
  styleUrls: ['./signupexpert.component.scss'],
})

export class SignupexpertComponent implements OnInit {


  user: any = {};
  segment = 'droite';
  constructor(private router: Router, private service: UserService,
    private toastController: ToastController) { }


  signup(f: NgForm) {
    this.service.registerExpert(f.value).subscribe(() => {
      //  localStorage.setItem("role", "expert");
      //  this.user.roles=="expert"
      this.router.navigate(['/login'])
      this.presentToast();
    })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'inscription effectuée avec succès',
      duration: 3000,
      cssClass: "customToast",

    });
    toast.present();
  }
  ngOnInit(): void {
  }
}
