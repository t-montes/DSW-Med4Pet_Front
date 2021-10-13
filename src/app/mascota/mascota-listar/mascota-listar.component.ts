import { Component, OnInit } from '@angular/core';
import { Mascota } from "../mascota";
import {MascotaService} from "../mascota.service";
@Component({
  selector: 'app-mascota-listar',
  templateUrl: './mascota-listar.component.html',
  styleUrls: ['./mascota-listar.component.scss']
})
export class MascotaListarComponent implements OnInit {
  mascotas: Array<Mascota>
  constructor(private mascotaService: MascotaService) { }

  getMascotas(){
    this.mascotaService.getMascotas().subscribe((mascotas)=>{
      this.mascotas = mascotas;
    })
  }
  ngOnInit() {
    this.getMascotas();
  }

}
