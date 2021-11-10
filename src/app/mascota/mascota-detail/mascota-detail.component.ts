import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaDetail } from '../mascotaDetail';

@Component({
  selector: 'app-mascota-detail',
  templateUrl: './mascota-detail.component.html',
  styleUrls: ['./mascota-detail.component.scss']
})
export class MascotaDetailComponent implements OnInit {

  @Input() mascotaDetail: MascotaDetail;
  constructor() { }

  ngOnInit() {
    console.log(this.mascotaDetail.id)
  }

}
