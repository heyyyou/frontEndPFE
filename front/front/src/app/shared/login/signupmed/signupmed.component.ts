import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signupmed',
  templateUrl: './signupmed.component.html',
  styleUrls: ['./signupmed.component.scss'],
})
export class SignupmedComponent implements OnInit {

  user: any = {};
  segment = 'droite';
  constructor(private router: Router, private service: UserService,
    private toastController: ToastController) { }


  signup(f: NgForm) {
    this.service.registerMed(f.value).subscribe(() => {
      localStorage.setItem("role", "generaliste"); // lorsque je fais sign up j vais store l data d woslt local bsh nestaaml baed role f login f root ;)
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
