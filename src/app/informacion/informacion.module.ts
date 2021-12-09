import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConocenosComponent} from './conocenos/conocenos.component'
import {MasInformacionComponent} from './masInformacion/masInformacion.component'
import {RegistrarseComponent} from './registrarse/registrarse.component'
import { VeterinarioModule } from '../veterinario/veterinario.module';
import { ClienteModule } from '../cliente/cliente.module';

@NgModule({
  imports: [
    CommonModule,
    VeterinarioModule,
    ClienteModule
  ],
  declarations: [ConocenosComponent,MasInformacionComponent,RegistrarseComponent],
  exports:[ConocenosComponent,MasInformacionComponent,RegistrarseComponent]
})
export class InformacionModule { }
