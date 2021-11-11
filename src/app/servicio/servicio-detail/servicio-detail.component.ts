import { Component, Input, OnInit } from '@angular/core';
import { ServicioDetail } from '../servicioDetail';

@Component({
  selector: 'app-servicio-detail',
  templateUrl: './servicio-detail.component.html',
  styleUrls: ['./servicio-detail.component.css']
})
export class ServicioDetailComponent implements OnInit {

  @Input() servicioDetail: ServicioDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.servicioDetail.id);
  }

}
