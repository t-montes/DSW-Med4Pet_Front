import { Component, OnInit } from '@angular/core';
import { ServicioDetail } from '../servicioDetail';
import {ServicioService} from "../servicio.service";
import {Servicio} from "../servicio";

@Component({
  selector: 'app-servicio-listar',
  templateUrl: './servicio-listar.component.html',
  styleUrls: ['./servicio-listar.component.scss']
})
export class ServicioListarComponent implements OnInit {

  servicios: Array<ServicioDetail>
  selected:boolean;
  selectedS: Servicio;

  constructor(private servicioService: ServicioService) { }

  getServicios(){
    this.servicioService.getServicios().subscribe((servicios)=>{
      this.servicios = servicios;
    })
  }

  ngOnInit() {
    this.getServicios();
    this.selected = false;

  }

  callType(event) {
    console.log(event.target.value);
    this.onSelected(event);
    console.log("Cambiando....", event);
  }
  onSelected(c: Servicio): void {

    this.selected = true;
    this.selectedS = c;
    console.log("Cambiando2....");

  }


}
