import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  strength = 0;
  signup = true;
  email = false;
  fullname = false;
  dob = false;
  gender = false;
  password = false;
  inputJson: any;
  loginJson: any;
  passwordStatus: any;
  dateOptions: any;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) {

    this.inputJson = this.formBuilder.group({
      email: [''],
      fullname: [''],
      dob: [''],
      gender: [''],
      password: [''],
    });

    this.loginJson = this.formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
    });

    this.inputJson.valueChanges.subscribe(val => {
      this.validateForm();
    });

  }

  ngOnInit() {
  }

  verifyEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) && email.length <= 50;
  }

  verifyPassword(password) {
    return password.length > 6 && password.length <= 20;
  }

  verifyFullname(name) {
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
    // User name is there or not
    this.email = this.verifyEmail(this.inputJson.get('email').value);
    this.fullname = this.verifyFullname(this.inputJson.get('fullname').value);
    this.password = this.verifyPassword(this.inputJson.get('password').value);
    this.gender = this.verifyGender(this.inputJson.get('gender').value);
    this.dob = this.verifyDob(this.inputJson.get('dob').value);
    console.log(this.email, this.fullname, this.password, this.gender, this.dob);
  }

  changePage() {
    if (this.signup) {
      document.getElementById('login').style.width = 700 + 'px';
    } else {
      document.getElementById('login').style.width = 350 + 'px';
    }
    this.signup = !this.signup;
  }

  checkLoginStatus() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };
    console.log(this.loginJson.getRawValue());

    this.http.post(environment.apiUrl + '/rest-auth/login/', this.loginJson.getRawValue(), httpOptions).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
      console.log('Username or password is incorrect');
    });

  }

}
