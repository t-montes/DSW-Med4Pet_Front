import { Component, Input, OnInit } from '@angular/core';
import { CitaDetail } from '../citaDetail';

@Component({
  selector: 'app-cita-detail',
  templateUrl: './cita-detail.component.html',
  styleUrls: ['./cita-detail.component.css']
})
export class CitaDetailComponent implements OnInit {

  @Input() citaDetail: CitaDetail;

  days: Array<String> = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  months: Array<String> = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

  constructor() { }

  nombresServicios() : String{
    let servs: Array<String> = [];
    this.citaDetail.serviciosTomados.forEach((s) => {
      servs.push(s.nombre);
    });
    return servs.join(", ");
  }

  ngOnInit() {
    console.log(this.citaDetail.id);
  }

}
