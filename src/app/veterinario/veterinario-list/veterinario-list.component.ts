import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../veterinario'
import { VeterinarioService } from '../veterinario.service'

@Component({
  selector: 'app-veterinario-list',
  templateUrl: './veterinario-list.component.html',
  styleUrls: ['./veterinario-list.component.scss']
})
export class VeterinarioListComponent implements OnInit {
  veterinarios: Array<Veterinario>;
  constructor(private veterinarioService: VeterinarioService) { }

  getVeterinarios(): void{
    this.veterinarioService.getVeterinarios()
      .subscribe(veterinarios=>{
        this.veterinarios = veterinarios;
        console.log("Veterinarios", veterinarios);
    })
  }
  ngOnInit() {
    this.getVeterinarios();
  }

}
