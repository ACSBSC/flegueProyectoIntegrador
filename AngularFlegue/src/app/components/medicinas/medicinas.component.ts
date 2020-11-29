import { Component, OnInit } from '@angular/core';
import { MedicinesService } from '../../services/medicines/medicines.service';
import * as Firebase from 'firebase/app';

@Component({
  selector: 'app-medicinas',
  templateUrl: './medicinas.component.html',
  styleUrls: ['./medicinas.component.css']
})
export class MedicinasComponent implements OnInit {


  constructor(public medicinesService: MedicinesService) { }

  ngOnInit(): void {
    this.getMedicinesPending();
  }


  getMedicinesPending() {
    const userId = Firebase.auth().currentUser.uid;
    console.log("Uid MEDICAMENTOOOSS", userId);
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

}
