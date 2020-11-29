import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicinesService } from '../../services/medicines/medicines.service'
import {Router} from '@angular/router'

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
    public medicinesService: MedicinesService,
    private router: Router) { }

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
          (res) => {
            this.router.navigate(['/medicinas'])
          },
          (err) => console.log(err)


        )
    }
  }

  medicineCompleted(id: string) {
    let newStatus = "completed";
    this.medicinesService.updateMedicineStatus(id, newStatus)
    .subscribe(
      (res) => {
        console.log(res)
        this.router.navigate(['/medicinas'])
      },
      (err) => console.log(err)
    )
  }

  medicineMissing(id: string) {
    let newStatus = "missing";
    this.medicinesService.updateMedicineStatus(id, newStatus)
    .subscribe(
      (res) => {
        console.log(res)
        this.router.navigate(['/medicinas'])
      },
      (err) => console.log(err)
    )
  }

}
