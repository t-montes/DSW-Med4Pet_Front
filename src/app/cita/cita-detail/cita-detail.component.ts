import { Component, Input, OnInit } from '@angular/core';
import { CitaDetail } from '../citaDetail';

@Component({
  selector: 'app-cita-detail',
  templateUrl: './cita-detail.component.html',
  styleUrls: ['./cita-detail.component.css']
})
export class CitaDetailComponent implements OnInit {

  @Input() citaDetail: CitaDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.citaDetail.id);
  }

}
