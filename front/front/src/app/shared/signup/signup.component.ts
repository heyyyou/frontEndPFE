import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  constructor(private menu: MenuController, private route: Router) { }


  user = {
    email: "",
    password: "",

  }
  Router: any;

  onClickMe() {

    console.log(this.user)
    if ((this.user.email == "ss@gmail.com") && (this.user.password == "mariem")) {

      this.route.navigate(['/homeExpert'])

    }
    else if ((this.user.email == "fatma@gmail.com") && (this.user.password == "fatma")) {
      this.route.navigate(['/home'])



    }
    else {

      alert("password or email not valid")

    }

  }








}







