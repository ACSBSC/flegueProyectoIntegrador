import { Component, OnInit } from '@angular/core';
import { SignsService } from '../../services/signs/signs.service';
import { FirebaseService } from '../../services/firebase/firebase.service'
import { NgForm } from '@angular/forms';
import { Sign } from 'src/app/models/sign';
import { Observable } from 'rxjs';
import * as Firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-signos-vitales-button',
  templateUrl: './signos-vitales-button.component.html',
  styleUrls: ['./signos-vitales-button.component.css']
})
export class SignosVitalesButtonComponent implements OnInit {

  constructor(
    public signsService: SignsService,
    public firebaseService: FirebaseService
  ) { }

  user;

  ngOnInit(): void {
    this.user = this.firebaseService.getUserId();

  }

  addSign(form: NgForm) {
    console.log("FORMS", form.value);
    let output = Object.assign(form.value, this.user);
    console.log("output concat", output);
    this.signsService.createSign(output).subscribe(
      res => {
        console.log("res signos vitales", res),
        window.location.href = `/signos-vitales`
      },
      err => console.error(err)
    )

  }



}
