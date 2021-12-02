import { Component, Input, OnInit } from '@angular/core';
import { MedioDePago } from '../medioDePago';

@Component({
  selector: 'app-medioDePago-create',
  templateUrl: './medioDePago-create.component.html',
  styleUrls: ['./medioDePago-create.component.scss']
})
export class MedioDePagoCreateComponent implements OnInit {

  //TODO @Input() citaId: number;
  showPse:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClick(showPse:boolean) {
    this.showPse = showPse;
  }

}
