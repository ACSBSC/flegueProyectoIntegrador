import { Component, OnInit } from '@angular/core';
import { SignsService } from '../../services/signs/signs.service'

import { FirebaseService } from '../../services/firebase/firebase.service'
import { NgForm } from '@angular/forms';
import { Sign } from '../../models/sign';
//import { Sign } from 'src/app/models/sign';
import { Medicine } from '../../models/medicine';

import { Observable } from 'rxjs';
import * as Firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  ngOnInit(): void {
    this.user = this.firebaseService.getUserId();

  }



}
