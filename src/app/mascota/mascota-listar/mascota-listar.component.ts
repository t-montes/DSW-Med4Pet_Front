import { Component, OnInit } from '@angular/core';
import { Mascota } from "../mascota";
import { MascotaService } from "../mascota.service";
import { MascotaDetail } from "../mascotaDetail";

@Component({
  selector: 'app-mascota-listar',
  templateUrl: './mascota-listar.component.html',
  styleUrls: ['./mascota-listar.component.scss']
})
export class MascotaListarComponent implements OnInit {

  // Ya está creado mascotaDetail, pero no se puede hacer la parte de cambiar mascota por mascotaDetail.
  mascotas: Array<MascotaDetail>;
  selectedMascota : Mascota;
  selected = false;

  constructor(private mascotaService: MascotaService) { }

  getMascotas(){
    this.mascotaService.getMascotas().subscribe((mascotas)=>{
      this.mascotas = mascotas;
      console.log("Mascotas", mascotas);
    })
  }
  ngOnInit() {
    this.selected = false;
    this.getMascotas();
  }

  onSelected(m: Mascota): void{
    this.selected = true;
    this.selectedMascota = m;
  }

}
