import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  esCliente:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  onClick(esCliente:boolean) {
    this.esCliente = esCliente;
  }
}
