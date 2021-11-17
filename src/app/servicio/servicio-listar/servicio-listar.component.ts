import { Component, OnInit } from '@angular/core';
import { ServicioDetail } from '../servicioDetail';
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-servicio-listar',
  templateUrl: './servicio-listar.component.html',
  styleUrls: ['./servicio-listar.component.scss']
})
export class ServicioListarComponent implements OnInit {

  servicios: Array<ServicioDetail>
  selected = false;
  selectedS: ServicioDetail;

  constructor(private servicioService: ServicioService) { }

  getServicios(){
    this.servicioService.getServicios().subscribe((servicios)=>{
      this.servicios = servicios;
    })
  }

  ngOnInit() {
    this.getServicios();
  }

  callType(event) {
    console.log(event.target.value);
    this.onSelected(event);
    console.log("Cambiando....", event);
  }
  onSelected(c: ServicioDetail): void {

    this.selected = true;
    this.selectedS = c;
    console.log("Cambiando2....");

  }


}
