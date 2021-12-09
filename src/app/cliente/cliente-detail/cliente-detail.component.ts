import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  selected = true;

  @Input() clienteDetail: Cliente;


  constructor() { }

  ngOnInit() {
    console.log(this.clienteDetail.id);
  }

}

