import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service';
import { MedicinesService } from '../../services/medicines/medicines.service'
import { FeelingsService } from '../../services/feelings/feelings.service';
import * as Firebase from 'firebase/app';
import { SignsService } from '../../services/signs/signs.service'
import * as moment from 'moment';


@Component({
  selector: 'app-resumen-usuario',
  templateUrl: './resumen-usuario.component.html',
  styleUrls: ['./resumen-usuario.component.css']
})
export class ResumenUsuarioComponent implements OnInit {

  constructor(
    public appointmentsService: AppointmentsService,
    public medicinesService: MedicinesService,
    public feelingsService: FeelingsService,
    public signsService: SignsService
  ) { }

  ngOnInit(): void {
    this.getAppointmentsPending();
    this.getAppointmentsCompleted();
    this.getAppointmentsMissing();

    this.getMedicinesPending();
    this.getMedicinesCompleted();
    this.getMedicinesMissing();

    this.getFeelings();
    this.getSigns();
  }

  getAppointments() {

    const userId = Firebase.auth().currentUser.uid;
    this.appointmentsService.getAppointments().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == userId) {
              array.push(res[key]);
            }
          }
        }
        this.appointmentsService.appointments = array;

      },
      err => console.error(err)
    )

  }

  getAppointmentsPending() {
    const userId = Firebase.auth().currentUser.uid;

    this.appointmentsService.getAppointmentsPending().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == userId) {
              array.push(res[key]);
            }
          }
        }
        this.appointmentsService.pending = array;

      },
      err => console.error(err)
    )

  }

  getAppointmentsMissing() {
    const userId = Firebase.auth().currentUser.uid;

    this.appointmentsService.getAppointmentsMissing().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == userId) {
              array.push(res[key]);
            }
          }
        }
        this.appointmentsService.missing = array;

      },
      err => console.error(err)
    )

  }

  getAppointmentsCompleted() {
    const userId = Firebase.auth().currentUser.uid;

    this.appointmentsService.getAppointmentsCompleted().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == userId) {
              array.push(res[key]);
            }
          }
        }
        this.appointmentsService.completed = array;

      },
      err => console.error(err)
    )

  }

  getFeelings() {
    const userId = Firebase.auth().currentUser.uid;
    this.feelingsService.getFeelings().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == userId) {
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

  getMedicines() {
    const userId = Firebase.auth().currentUser.uid;
    this.medicinesService.getMedicines().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == userId) {
              array.push(res[key]);
            }
          }
        }
        this.medicinesService.medicines = array;

      },
      err => console.error(err)
    )

  }

  getMedicinesPending() {
    const userId = Firebase.auth().currentUser.uid;

    this.medicinesService.getMedicinesPending().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == userId) {
              array.push(res[key]);
            }

          }
        }
        this.medicinesService.pending = array;

      },
      err => console.error(err)
    )

  }

  getMedicinesMissing() {
    const userId = Firebase.auth().currentUser.uid;

    this.medicinesService.getMedicinesMissing().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == userId) {
              array.push(res[key]);
            }
          }
        }
        this.medicinesService.missing = array;

      },
      err => console.error(err)
    )

  }

  getMedicinesCompleted() {
    const userId = Firebase.auth().currentUser.uid;

    this.medicinesService.getMedicinesCompleted().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == userId) {
              array.push(res[key]);
            }
          }
        }
        this.medicinesService.completed = array;

      },
      err => console.error(err)
    )

  }

  getSigns() {
    const userId = Firebase.auth().currentUser.uid;

    this.signsService.getSigns().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == userId) {
              array.push(res[key]);
            }
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



}
