import { Component, OnInit } from '@angular/core';
import { Servicio } from "../servicio";
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-servicio-listar',
  templateUrl: './servicio-listar.component.html',
  styleUrls: ['./servicio-listar.component.scss']
})
export class ServicioListarComponent implements OnInit {
  servicios: Array<Servicio>
  constructor(private servicioService: ServicioService) { }

  getServicios(){
    this.servicioService.getServicios().subscribe((servicios)=>{
      this.servicios = servicios;
      console.log("Servicios", servicios);
    })
  }
  ngOnInit() {
    this.getServicios();
  }

}
