import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EmpresaConvenio } from '../empresaConvenio';

@Component({
  selector: 'app-empresaConvenio-detail',
  templateUrl: './empresaConvenio-detail.component.html',
  styleUrls: ['./empresaConvenio-detail.component.css']
})
export class EmpresaConvenioDetailComponent implements OnInit {

  selected = true;

  @Input() empresaConvenioDetail: EmpresaConvenio;


  constructor() { }

  ngOnInit() {
    console.log(this.empresaConvenioDetail.id);
  }

}
