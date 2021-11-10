import { Component, OnInit } from '@angular/core';
import { CitaDetail } from '../citaDetail'
import { CitaService } from '../cita.service';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.scss']
})
export class CitaListarComponent implements OnInit {

  citas: Array<CitaDetail>;
  selected = false;
  selectedCita: CitaDetail;

  constructor(private citaService: CitaService) { }

  getCitas(): void {
    this.citaService.getCitas().subscribe(citas => {
      this.citas = citas;
    });
  }

  ngOnInit() {
    this.getCitas();
  }

  onSelected(c: CitaDetail): void {
    this.selected = true;
    this.selectedCita = c;
  }

}
