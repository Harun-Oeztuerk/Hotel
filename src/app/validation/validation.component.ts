import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { event } from 'cypress/types/jquery';
import { RouterModule, Route } from '@angular/router';
@Component({
  selector: 'HotelApp-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
// @NgModule({
//   /*and add it to the imports array here*/
//   selector: 'HotelApp-validation',
//   templateUrl: './validation.component.html',
//   styleUrls: ['./validation.component.scss'],
//   imports:      [ FormsModule,  CommonModule],
//   declarations: [ YourFormComponent ],
//   exports:      [],
//   providers:    [],
// })
export class ValidationComponent {
  name!:string;
  email!:string;
  password!:string;
  @ViewChild('signUp', { static: true }) signUpButton!: ElementRef;
  @ViewChild('signIn', {static: true}) signInButton!: ElementRef;
  @ViewChild('container', {static: true}) container!: ElementRef;

  signInButtonFunction(){
    if(this.name === document.getElementById("signInMail")?.innerText || this.email === document.getElementById("signInMail")?.innerText && this.password === document.getElementById("signInPassword")?.innerText){
      console.log("login successful");
    }else{
      console.log("login error");
    }
  }
  signUpButtonFunction(){
    this.name = document.getElementById("signUpName")?.innerText!;
    this.email = document.getElementById("signUpMail")?.innerText!;
    this.password = document.getElementById("signUpPassword")?.innerText!;
    console.log(`Name: ${this.name}\nE-Mail: ${this.email}\nPassword: ${this.password}`);
    // this.Route.navigateByUrl(this.redirectUrl);
    
  }

  signUpButtonSwitchFunction() {
    document.getElementById("container")?.classList.add("right-panel-active");

  }
  signInButtonSwitchFunction() {
    document.getElementById("container")?.classList.remove("right-panel-active");
  }
  onSubmit($event:Event){
    
    // event.preventDefault();
    console.log(`Registration form has been submitted with the values:\nName: ${this.name}\nEmail: ${this.email}\nPassword: ${this.password}`);
  }
}
