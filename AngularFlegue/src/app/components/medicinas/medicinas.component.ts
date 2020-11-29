import { Component, OnInit } from '@angular/core';
import { MedicinesService } from '../../services/medicines/medicines.service'

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
    this.medicinesService.getMedicinesPending().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            array.push(res[key]);
          }
        }
        this.medicinesService.pending = array;

      },
      err => console.error(err)
    )

  }

}
