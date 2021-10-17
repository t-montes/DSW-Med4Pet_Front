import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita'
import { CitaService } from '../cita.service';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.scss']
})
export class CitaListarComponent implements OnInit {

  citas: Array<Cita>;

  constructor(private citaService: CitaService) { }

  getCitas(): void {
    this.citaService.getCitas().subscribe(citas => {
      this.citas = citas;
    });
  }

  ngOnInit() {
    this.getCitas();
  }

}
