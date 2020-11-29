import { Component, OnInit } from '@angular/core';

import { SignsService } from '../../services/signs/signs.service';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { NgForm } from '@angular/forms';
import { Sign } from '../../models/sign';

@Component({
  selector: 'app-signos-vitales',
  templateUrl: './signos-vitales.component.html',
  styleUrls: ['./signos-vitales.component.css']
})

export class SignosVitalesComponent implements OnInit {


  constructor(
    public signsService: SignsService,
    public firebaseService: FirebaseService
  ) { }

  user;
  lastSign;
  error;

  ngOnInit(): void {
    this.loadLastSign();

  }

  loadLastSign() {
    const id = localStorage.getItem("user");
    this.signsService.getLastSign(id).subscribe(
      result => {
        this.lastSign = result;
        console.log("yaaaa", this.lastSign);
      },
      error => this.error = error
    )
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
