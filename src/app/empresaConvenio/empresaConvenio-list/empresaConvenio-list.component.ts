import { Component, OnInit } from '@angular/core';
import { EmpresaConvenio } from '../empresaConvenio'
import { EmpresaConvenioService } from '../empresaConvenio.service'

@Component({
  selector: 'app-empresaConvenio-list',
  templateUrl: './empresaConvenio-list.component.html',
  styleUrls: ['./empresaConvenio-list.component.scss']
})
export class EmpresaConvenioListComponent implements OnInit {

  empresaConvenio: Array<EmpresaConvenio>
  constructor(private empresaConvenioService: EmpresaConvenioService ) { }

  getEmpresaConvenio(): void {
    this.empresaConvenioService.getEmpresaConvenio().subscribe((empresaConvenio)=>{
      this.empresaConvenio = empresaConvenio;
      console.log("EmpresaConvenio", empresaConvenio)
    })
  }

  ngOnInit() {
    this.getEmpresaConvenio();
  }

}
