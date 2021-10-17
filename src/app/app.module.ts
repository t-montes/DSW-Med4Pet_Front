import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import {CalificacionModule} from './calificacion/calificacion.module'
import {RegistroMedicoModule} from './registroMedico/registroMedico.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaCreditoModule } from './tarjetaCredito/tarjetaCredito.module'
import { PseModule } from './pse/pse.module';


import { VeterinarioModule } from './veterinario/veterinario.module'
import { ContactoModule } from './contacto/contacto.module'
import { CitaModule } from './cita/cita.module';
import { AgendaModule } from './agenda/agenda.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CalificacionModule,
    RegistroMedicoModule,
    CitaModule,
    AgendaModule,
    TarjetaCreditoModule,
    PseModule,
    VeterinarioModule,
    ContactoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
