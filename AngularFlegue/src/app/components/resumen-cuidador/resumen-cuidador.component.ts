import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service';
import { MedicinesService } from '../../services/medicines/medicines.service'
import { FeelingsService } from '../../services/feelings/feelings.service';
import { SignsService } from '../../services/signs/signs.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-resumen-cuidador',
  templateUrl: './resumen-cuidador.component.html',
  styleUrls: ['./resumen-cuidador.component.css']
})
export class ResumenCuidadorComponent implements OnInit {

  constructor(
    private auth: AngularFireAuth, private router: Router,
    public appointmentsService: AppointmentsService,
    public medicinesService: MedicinesService,
    public feelingsService: FeelingsService,
    public signsService: SignsService
  ) { }


  ngOnInit(): void {
    this.getAppointmentsPending();
    this.getAppointmentsCompleted();
    this.getAppointmentsMissing();

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
            array.push(res[key]);
          }
        }
        this.appointmentsService.appointments = array;

      },
      err => console.error(err)
    )

  }

  getAppointmentsPending() {
    this.appointmentsService.getAppointmentsPending().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            array.push(res[key]);
          }
        }
        this.appointmentsService.pending = array;

      },
      err => console.error(err)
    )

  }

  getAppointmentsMissing() {
    this.appointmentsService.getAppointmentsMissing().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            array.push(res[key]);
          }
        }
        this.appointmentsService.missing = array;

      },
      err => console.error(err)
    )

  }

  getAppointmentsCompleted() {
    this.appointmentsService.getAppointmentsCompleted().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            array.push(res[key]);
          }
        }
        this.appointmentsService.completed = array;

      },
      err => console.error(err)
    )

  }


  getFeelings() {
    this.feelingsService.getFeelings().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            array.push(res[key]);
          }
        }
        console.log('array', array);
        this.feelingsService.feelings = array;

      },
      err => console.error(err)
    )

  }

  getMedicines() {
    console.log("icon");
    this.medicinesService.getMedicines().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            array.push(res[key]);
          }
        }
        this.medicinesService.medicines = array;

      },
      err => console.error(err)
    )

  }

  getSigns() {
    this.signsService.getSigns().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            array.push(res[key]);
          }
        }
        this.signsService.signs = array;

      },
      err => console.error(err)
    );

  }

  getDate(date){
    return moment(date).format('LLLL');
  }


  // CAMBIAR VALORES
  getColorSys(sys) {
    let color = 'gray';
    if (sys <= 89) {
      color = 'rgb(0, 206, 209)';

    }else if (sys >= 90 && sys <= 199) {
      color = 'rgb(202,227,101)';

    }else if (sys >= 120 && sys <= 128) {
      color = 'rgb(255,223,89)';

    }else if (sys >= 130 && sys <= 139) {
      color = 'rgb(255,190,89)';

    }else if (sys >= 140 && sys <= 179) {
      color = 'rgb(255,146,76)';

    }else if (sys >= 180) {
      color = 'rgb(255,15,14)';

    }
    return color;
  }

  getColorDay(day) {
    let color = 'gray';
    if (day <= 59) {
      color = 'rgb(0, 206, 209)';

    }else if (day >= 60 && day <= 70) {
      color = 'rgb(202,227,101)';

    }else if (day >= 80 && day <= 89) {
      color = 'rgb(255,190,89)';

    }else if (day >= 90 && day <= 120) {
      color = 'rgb(255,146,76)';

    }else if (day > 120) {
      color = 'rgb(255,15,14)';

    }
    return color;
  }

  getColorPulse(pulse) {
    let color = 'gray';
    if (pulse <= 59) {
      color = 'rgb(0, 206, 209)';

    }else if (pulse >= 60 && pulse <= 100) {
      color = 'rgb(202,227,101)';


    }else if (pulse > 100) {
      color = 'rgb(255,15,14)';

    }
    return color;
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
