import { Component, OnInit } from '@angular/core';
import { FeelingsService } from '../../services/feelings/feelings.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-estado-de-animo',
  templateUrl: './estado-de-animo.component.html',
  styleUrls: ['./estado-de-animo.component.css']
})
export class EstadoDeAnimoComponent implements OnInit {

  constructor(public feelingsService: FeelingsService) { }

  ngOnInit(): void {
  }

  addFeeling(form: NgForm) {
    console.log(form.value);
    this.feelingsService.createFeeling(form.value).subscribe(
      res => {
        console.log(res),
        window.location.href = `/resumen-usuario/`
      },
      err => console.error(err)
    )
  }

}
