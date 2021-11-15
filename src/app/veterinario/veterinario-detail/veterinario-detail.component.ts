import { Component, Input, OnInit } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioDetail } from '../veterinarioDetail';

@Component({
  selector: 'app-veterinario-detail',
  templateUrl: './veterinario-detail.component.html',
  styleUrls: ['./veterinario-detail.component.scss']
})
export class VeterinarioDetailComponent implements OnInit {

  @Input() veterinarioDetail: VeterinarioDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.veterinarioDetail.id);
  }

}
