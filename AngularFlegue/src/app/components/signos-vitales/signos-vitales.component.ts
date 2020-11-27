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
    if (sys == 1) {
      color = 'rgb(202,227,101)';

    }else if (sys == 2) {
      color = 'rgb(255,223,89)';

    }else if (sys == 3) {
      color = 'rgb(255,190,89)';

    }else if (sys == 4) {
      color = 'rgb(255,146,76)';

    }else if (sys == 5) {
      color = 'rgb(255,15,14)';

    }
    return color;
  }

  getColorDay(day) {
    let color = 'gray';
    if (day == 1) {
      color = 'rgb(202,227,101)';

    }else if (day == 2) {
      color = 'rgb(255,223,89)';

    }else if (day == 3) {
      color = 'rgb(255,190,89)';

    }else if (day == 4) {
      color = 'rgb(255,146,76)';

    }else if (day == 5) {
      color = 'rgb(255,15,14)';

    }
    return color;
  }

  getColorPulse(pulse) {
    let color = 'gray';
    if (pulse == 1) {
      color = 'rgb(202,227,101)';

    }else if (pulse == 2) {
      color = 'rgb(255,223,89)';

    }else if (pulse == 3) {
      color = 'rgb(255,190,89)';

    }else if (pulse == 4) {
      color = 'rgb(255,146,76)';

    }else if (pulse == 5) {
      color = 'rgb(255,15,14)';

    }
    return color;
  }



}
