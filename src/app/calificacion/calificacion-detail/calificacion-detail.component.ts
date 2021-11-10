import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../calificacion';

@Component({
  selector: 'app-calificacion-detail',
  templateUrl: './calificacion-detail.component.html',
  styleUrls: ['./calificacion-detail.component.scss']
})
export class CalificacionDetailComponent implements OnInit {
  @Input () calificacionDetail :Calificacion;
  constructor() { }

  ngOnInit() {
  }

}
