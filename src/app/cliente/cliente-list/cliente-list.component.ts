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

  getClientes(): void {
    this.clienteService.getClientes().subscribe((clientes)=>{
      this.clientes = clientes;
      console.log("Clientes", clientes)
    })
  }

  selectedCliente: Cliente;
  selected = false;

  onSelected(b: Cliente): void {
    this.selected = true;
    this.selectedCliente = b;
    console.log(b.id)
  }

  ngOnInit() {
    this.getClientes();
  }

}
