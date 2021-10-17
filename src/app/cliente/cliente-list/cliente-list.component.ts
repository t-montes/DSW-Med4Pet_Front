import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService} from '../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
})
export class ClienteListComponent implements OnInit {

  clientes: Array<Cliente>;
  constructor(private clienteService: ClienteService ) { }

  getCliente(): void {
    this.clienteService.getClientes().subscribe((clientes)=>{
      this.clientes = clientes;
      console.log("Clientes", clientes)
    })
  }

  ngOnInit() {
    this.getCliente();
  }

}
