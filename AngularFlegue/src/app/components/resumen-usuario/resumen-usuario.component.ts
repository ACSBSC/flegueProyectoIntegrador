import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service';
import { MedicinesService } from '../../services/medicines/medicines.service'
import { FeelingsService } from '../../services/feelings/feelings.service';

@Component({
  selector: 'app-resumen-usuario',
  templateUrl: './resumen-usuario.component.html',
  styleUrls: ['./resumen-usuario.component.css']
})
export class ResumenUsuarioComponent implements OnInit {

  constructor(
    public appointmentsService: AppointmentsService,
    public medicinesService: MedicinesService,
    public feelingsService: FeelingsService
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
            array.push(res[key]);
          }
        }
        this.appointmentsService.appointments = array;

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

  getFeelingImage(feeling) {
    let img = '../../../assets/images/smile.jpg';
    console.log("jfkalñ", feeling);

    if (feeling === "feliz") {
      img = '../../../assets/images/smile.jpg';

    } else if (feeling === "irritado") {
      img = '../../../assets/images/grave.jpg';

    } else if (feeling === "triste") {
      img = '../../../assets/images/triste.jpg';

    }
    return img;
  }

  getMedicines() {
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

}
