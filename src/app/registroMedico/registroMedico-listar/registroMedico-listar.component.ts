import { Component, OnInit } from '@angular/core';
import {RegistroMedico} from  '../registroMedico'
import {RegistroMedicoService} from '../registroMedico.service'
@Component({
  selector: 'app-registroMedico-listar',
  templateUrl: './registroMedico-listar.component.html',
  styleUrls: ['./registroMedico-listar.component.css']
})
export class RegistroMedicoListarComponent implements OnInit {
constructor(private registroMedicoService: RegistroMedicoService) { }

registrosMedicos: Array<RegistroMedico>;

getRegistrosMedicos(): void {
  this.registroMedicoService.getRegistrosMedicos()
    .subscribe(registrosMedicos => {
      this.registrosMedicos = registrosMedicos;
    });
}
ngOnInit() {
  this.getRegistrosMedicos();
}

}
