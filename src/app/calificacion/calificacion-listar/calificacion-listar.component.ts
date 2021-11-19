import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente/cliente';
import { Veterinario } from 'src/app/veterinario/veterinario';
import {Calificacion} from '../calificacion'
import {CalificacionService} from '../calificacion.service'

@Component({
  selector: 'app-calificacion-listar',
  templateUrl: './calificacion-listar.component.html',
  styleUrls: ['./calificacion-listar.component.css']
})
export class CalificacionListarComponent implements OnInit {

  constructor(private calificacionService: CalificacionService) { }

  @Input () calificaciones: Array<Calificacion>;
  selected:boolean;
  selectedCal:Calificacion;

  getCalificaciones(): void {
    //this.calificaciones=this.persona.getCalificaciones();
    this.calificacionService.getCalificaciones()
      .subscribe(calificaciones => {
        this.calificaciones = calificaciones;
      });
  }
  ngOnInit() {
    this.selected = false;
  }
  onSelected(cal: Calificacion): void {
    this.selected = true;
    this.selectedCal = cal;
  }

}
