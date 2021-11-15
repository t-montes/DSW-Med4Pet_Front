import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../veterinario'
import { VeterinarioService } from '../veterinario.service'
import { VeterinarioDetail } from '../veterinarioDetail';
@Component({
  selector: 'app-veterinario-list',
  templateUrl: './veterinario-list.component.html',
  styleUrls: ['./veterinario-list.component.scss']
})
export class VeterinarioListComponent implements OnInit {
  veterinarios: Array<VeterinarioDetail>;
  selected = false;
  selectedVeterinario: Veterinario;
  constructor(private veterinarioService: VeterinarioService) { }

  getVeterinarios(): void{
    this.veterinarioService.getVeterinarios()
      .subscribe(veterinarios=>{
        this.veterinarios = veterinarios;
        console.log("Veterinarios", veterinarios);
    })
  }

  onSelected(v: Veterinario):void{
    this.selected=true;
    this.selectedVeterinario=v;
  }

  ngOnInit() {
    this.getVeterinarios();
  }

}
