import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {DashboardService} from "../dashboard.service";
import {Router} from "@angular/router";

declare var Materialize: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  next = false;
  scrollRequest = false;
  patientDetails = [];
  addInfo = false;
  patientDetailsJson: any;
  patientEditDetailsJson: any;
  showMain = false;
  complete = false;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private dashboardService: DashboardService,
              private router: Router) {

    this.patientDetailsJson = this.formBuilder.group({
      phone_number: [''],
      patient_name: [''],
      email: [''],
      gender: [''],
    });

  }

  ngOnInit() {

    // Move scroll at the top where we are showing patient details
    document.getElementById('patient-list-ajax').scrollTo(0, 0);

    // Get initial patient list
    this.dashboardService.getPatientList(false).subscribe((response: any) => {
      console.log(response);
      if (response.next) {
        this.next = response.next;
        this.patientDetails = response.results;
        console.log(this.patientDetails);
      } else {
        this.next = false;
      }
    })
  }

  // Track scroll data and then load more data if we are at the end
  getScrollData() {
    let a = document.getElementById('patient-list-ajax').scrollTop;
    let b = document.getElementById('patient-list-ajax').offsetHeight;
    let c = document.getElementById('patient-list-ajax').scrollHeight;
    console.log(a + b + 20, c);
    if ((a + b + 20 > c) && !this.scrollRequest && !this.complete) {
      console.log('requesting');
      this.scrollRequest = true;
      this.dashboardService.getPatientList(this.next).subscribe((response: any) => {
        console.log(response);
        if (response.next) {
          this.next = response.next;
          this.patientDetails = this.patientDetails.concat(response.results);
          console.log(this.patientDetails);
        } else {
          this.next = false;
          this.complete = true;
        }
        this.scrollRequest = false;
      })
    }
  }

  // Add patient details
  addDetails() {
    this.addInfo = !this.addInfo;
    if (this.addInfo) {
      this.patientDetailsJson = this.formBuilder.group({
        phone_number: [''],
        patient_name: [''],
        email: [''],
        gender: [''],
      });
      document.getElementById('add-details').style.width = 350 + 'px';
    } else {
      document.getElementById('add-details').style.width = 0 + 'px';
    }
  }

  // Refresh patient list and show latest data
  refreshDetails() {
    this.complete = false;
    this.patientDetails = [];
    this.dashboardService.getPatientList(false).subscribe((response: any) => {
      console.log(response);
      if (response.next) {
        this.next = response.next;
        this.patientDetails = response.results;
        console.log(this.patientDetails);
      } else {
        this.next = false;
      }
    })
  }

  // On click show main card (right one) and update form group
  showDetails(id) {
    this.showMain = true;
    for (let i = 0; i < this.patientDetails.length; i++) {
      if (this.patientDetails[i].id == id) {
        this.patientEditDetailsJson = this.formBuilder.group({
          id: [this.patientDetails[i].id],
          phone_number: [this.patientDetails[i].phone_number],
          patient_name: [this.patientDetails[i].patient_name],
          email: [this.patientDetails[i].email],
          gender: [this.patientDetails[i].gender],
        });
        console.log(this.patientEditDetailsJson);
      }
    }
  }

  // Update patient data based on form control value
  updatePatientDetails() {
    this.dashboardService.updatePatientDetails(this.patientEditDetailsJson.getRawValue()).subscribe((response: any) => {
      this.patientEditDetailsJson = this.formBuilder.group({
        id: [''],
        phone_number: [''],
        patient_name: [''],
        email: [''],
        gender: [''],
      });
      this.showMain = false;
      Materialize.toast('Details Updated', 4000);
      this.refreshDetails();
    });
  }

  // Close main card and clear data
  closeMain() {
    this.showMain = false;
    this.patientEditDetailsJson = this.formBuilder.group({
      id: [''],
      phone_number: [''],
      patient_name: [''],
      email: [''],
      gender: [''],
    });
  }

  // Save patient details
  savePatientDetails() {
    this.dashboardService.savePatientDetails(this.patientDetailsJson.getRawValue()).subscribe((response: any) => {
      document.getElementById('add-details').style.width = 0 + 'px';
      this.addInfo = !this.addInfo;
      console.log(response);
      this.patientDetailsJson = this.formBuilder.group({
        phone_number: [''],
        patient_name: [''],
        email: [''],
        gender: [''],
      });
      Materialize.toast('Details Saved !', 4000);
    });
  }

  // Show specified date
  beautifyDate(date: string) {
    return date.split('T')[0];
  }

}
