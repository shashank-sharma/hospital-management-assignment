import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {AuthenticationService} from '../authentication.service';
import {Router} from "@angular/router";

declare var Materialize: any;

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  strength = 0;
  signup = true;
  phone_number = false;
  first_name = false;
  last_name = false;
  gender = false;
  password = false;
  inputJson: any;
  loginJson: any;
  passwordStatus: any;
  dateOptions: any;
  registerLoad = false;
  loginLoad = false;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private authenticationService: AuthenticationService,
              private router: Router) {

    this.inputJson = this.formBuilder.group({
      phone_number: [''],
      first_name: [''],
      last_name: [''],
      gender: [''],
      password: [''],
    });

    this.loginJson = this.formBuilder.group({
      phone_number: [''],
      password: [''],
    });

    this.inputJson.valueChanges.subscribe(val => {
      this.validateForm();
    });

  }

  ngOnInit() {
    if (window.screen.width < 1200) {
      console.log('yes');
        document.getElementById('login').style.width = 0 + 'px';
    }
  }

  verifyPhoneNumber(phone_number) {
    return phone_number.length >= 8 && phone_number.length < 11;
  }

  verifyPassword(password) {
    return password.length > 6 && password.length <= 20;
  }

  verifyFirstname(name) {
    return name.length > 3 && name.length <= 50;
  }

  verifyLastname(name) {
    return name.length > 3 && name.length <= 50;
  }

  verifyGender(gender) {
    return gender.length > 1;
  }

  verifyDob(dob) {
    return dob.length > 1;
  }
  checkStrength(password) {
    console.log(password);
    const passwordStatus = document.getElementsByClassName('password-status-text')[0];

    this.strength = 0;
    if (password.length > 7) this.strength += 1;
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) this.strength += 1;
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) this.strength += 1;
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) this.strength += 1;
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) this.strength += 1;
    if (this.strength < 2) {
      this.passwordStatus = 'It\'s kind of Weak';
    } else if (this.strength === 2) {
      this.passwordStatus = 'Much better';
    } else if (this.strength === 3) {
      this.passwordStatus = 'This will work';
    } else if (this.strength === 4) {
      this.passwordStatus = 'Secured';
    } else {
      this.passwordStatus = 'Unbeatable';
    }
    document.getElementById('password-indicator').style.height = this.strength * 120 + 'px';
    document.getElementById('small-password').style.width = 20 * this.strength + '%';
  }

  validateForm() {
    console.log(this.inputJson.getRawValue());
    // User name is there or not
    this.phone_number = this.verifyPhoneNumber(this.inputJson.get('phone_number').value);
    this.first_name = this.verifyFirstname(this.inputJson.get('first_name').value);
    this.last_name = this.verifyLastname(this.inputJson.get('last_name').value);
    this.password = this.verifyPassword(this.inputJson.get('password').value);
    this.gender = this.verifyGender(this.inputJson.get('gender').value);
    console.log(this.phone_number, this.first_name, this.password, this.gender, this.last_name);
  }

  changePage() {
    console.log('asd =', window.screen.width);
    if (window.screen.width > 1200) {
      if (this.signup) {
        document.getElementById('login').style.width = 700 + 'px';
      } else {
        document.getElementById('login').style.width = 350 + 'px';
      }
    } else {
      console.log('this is it');
      if (this.signup) {
        document.getElementById('login').style.width = 700 + 'px';
      } else {
        document.getElementById('login').style.width = 0 + 'px';
      }
    }
    this.signup = !this.signup;
  }

  checkLoginStatus() {
    this.loginLoad = true;
    this.authenticationService.loginUser(this.loginJson.getRawValue()).subscribe((response: any) => {
      if (response.id) {
        localStorage.setItem('id', response.id);
        localStorage.setItem('token', response.token);
        this.router.navigate(['dashboard']);
      } else {
        Materialize.toast('Wrong Password', 4000);
      }
    })
  }

  checkRegisterStatus() {
    this.registerLoad = true;
    const data = this.authenticationService.registerUser(this.inputJson.getRawValue());
    if (data) {
      this.registerLoad = false;
      Materialize.toast('Successfully Registed', 4000);
      Materialize.toast('Now please log in', 4000);
      this.changePage();
    }
  }

}
