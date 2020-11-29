import { Component, OnInit } from '@angular/core';
import { FeelingsService } from '../../services/feelings/feelings.service'

import { FirebaseService } from '../../services/firebase/firebase.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-estado-de-animo',
  templateUrl: './estado-de-animo.component.html',
  styleUrls: ['./estado-de-animo.component.css']
})
export class EstadoDeAnimoComponent implements OnInit {

  constructor(
    public feelingsService: FeelingsService,
    public firebaseService: FirebaseService
    ) { }

    user;

  ngOnInit(): void {
    this.user = this.firebaseService.getUserId();

  }

  addFeeling(form: NgForm) {
    console.log(form.value);
    let output = Object.assign(form.value, this.user);
    console.log("output concat", output);
    this.feelingsService.createFeeling(output).subscribe(
      res => {
        console.log(res),
        window.location.href = `/`;
      },
      err => console.error(err)
    )
  }

}
