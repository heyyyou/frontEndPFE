import { UserService } from './../../services/user.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MenuController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { Router } from '@angular/router';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  resgisterationForm: FormGroup;
  user: any = {};
  segment = 'droite';
  // constructor(private router: Router, private service: UserService,
  //   private toastController: ToastController, private fb: FormBuilder) { }


  // signup(f: NgForm) {
  //   this.service.registerMed(f.value).subscribe(() => {

  //     this.router.navigate(['/login'])
  //     this.presentToast();
  //   })
  // }
  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: 'inscription effectuée avec succès',
  //     duration: 3000,
  //     cssClass: "customToast",

  //   });
  //   toast.present();
  // }
  ngOnInit(): void {
    // this.createRegisterationForm();
  }

  /* createRegisterationForm() {
     this.resgisterationForm = this.fb.group({
       userName: [null, Validators.required],
       email: [null, Validators.required],
       telephone: [null, Validators.required],
       role: [null, Validators.required],
       gender: [null, Validators.required],
       image: [null, Validators.required],
       password: [null, Validators.required],


     })
   }
   getUsername() {
     return this.resgisterationForm.get('userName') as FormControl;
   }
   email() {
     return this.resgisterationForm.get('email') as FormControl;
   }
   telephone() {
     return this.resgisterationForm.get('telephone') as FormControl;
   }
   role() {
     return this.resgisterationForm.get('role') as FormControl;
   }
   gender() {
     return this.resgisterationForm.get('gender') as FormControl;
   }
   image() {
     return this.resgisterationForm.get('image') as FormControl;
   }
   password() {
     return this.resgisterationForm.get('password') as FormControl;
   }

   onSubmit() {
     this.user = Object.assign(this.user, this.resgisterationForm.value);
     localStorage.setItem('USers', JSON.stringify(this.user))
   }

 }*/
}
