import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service';
import { MedicinesService } from '../../services/medicines/medicines.service'
import { FeelingsService } from '../../services/feelings/feelings.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resumen-cuidador',
  templateUrl: './resumen-cuidador.component.html',
  styleUrls: ['./resumen-cuidador.component.css']
})
export class ResumenCuidadorComponent implements OnInit {
  icon= 'HOLAAA';
  abueId = this.route.snapshot.paramMap.get('id');
  constructor(
    private auth: AngularFireAuth, private router: Router,
    public appointmentsService: AppointmentsService,
    public medicinesService: MedicinesService,
    public feelingsService: FeelingsService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.getAppointments();
    this.getMedicines();
    this.getFeelings();
  }

  getAppointments() {
    

    this.appointmentsService.getAppointments().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == this.abueId) {
              array.push(res[key]);
            }
          }
        }
        this.appointmentsService.appointments = array;

      },
      err => console.error(err)
    )

  }

  getMedicines() {
    this.feelingsService.getFeelings().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == this.abueId) {
              array.push(res[key]);
            }
          }
        }
        console.log('array', array);
        this.feelingsService.feelings = array;

      },
      err => console.error(err)
    )

  }

  getFeelings() {
    console.log("icon");
    this.medicinesService.getMedicines().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == this.abueId) {
              array.push(res[key]);
            }
          }
        }
        this.medicinesService.medicines = array;

      },
      err => console.error(err)
    )

  }
  logout(){
    this.auth.signOut().then(() => this.router.navigate(['login']));
    //let user = this.auth.currentUser;
    //console.log(user);


    /* this.auth.onAuthStateChanged((user: firebase.User) => {
      if (user) {
        console.log('User is logged in');
        console.log(user.uid);

      } else {
        console.log('User is not logged in');

      }
    }); */

  }

}
