import { Component, OnInit } from '@angular/core';
import { SignsService } from '../../services/signs/signs.service'
import * as moment from 'moment';

@Component({
  selector: 'app-signos-vitales-historial',
  templateUrl: './signos-vitales-historial.component.html',
  styleUrls: ['./signos-vitales-historial.component.css']
})
export class SignosVitalesHistorialComponent implements OnInit {

  constructor(public signsService: SignsService) { }

  ngOnInit(): void {
    this.getSigns();
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



}
