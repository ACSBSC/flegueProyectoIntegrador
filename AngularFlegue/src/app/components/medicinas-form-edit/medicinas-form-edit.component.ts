import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicinesService } from '../../services/medicines/medicines.service'

@Component({
  selector: 'app-medicinas-form-edit',
  templateUrl: './medicinas-form-edit.component.html',
  styleUrls: ['./medicinas-form-edit.component.css']
})
export class MedicinasFormEditComponent implements OnInit {
  medicine;
  error;

  constructor(
    public route: ActivatedRoute,
    public medicinesService: MedicinesService
  ) { }

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

  editMedicine() {

  }

}
