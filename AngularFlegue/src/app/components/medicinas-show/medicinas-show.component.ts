import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicinesService } from '../../services/medicines/medicines.service'

@Component({
  selector: 'app-medicinas-show',
  templateUrl: './medicinas-show.component.html',
  styleUrls: ['./medicinas-show.component.css']
})
export class MedicinasShowComponent implements OnInit {
  medicine;
  error;

  constructor(
    public route: ActivatedRoute,
    public medicinesService: MedicinesService) { }

  ngOnInit(): void {
    this.loadMedicine();
  }

  loadMedicine() {
    const medicineId = this.route.snapshot.paramMap.get('id');
    this.medicinesService.getMedicineById(medicineId).subscribe(
      data => this.medicine = data,
      error => this.error = error
    )
  }

  deleteMedicine(id: string) {
    if (confirm('¿Seguro que quieres borrar esta medicina?')) {
      this.medicinesService.deleteMedicine(id)
        .subscribe(
          (res) => console.log(res),
          (err) => console.log(err)


        )
    }
  }

}
