import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServicioModule } from './servicio/servicio.module';
import { MascotaModule } from './mascota/mascota.module';
import { CalificacionModule} from './calificacion/calificacion.module'
import { RegistroMedicoModule} from './registroMedico/registroMedico.module'
import { TarjetaCreditoModule } from './tarjetaCredito/tarjetaCredito.module'
import { PseModule } from './pse/pse.module';
import { VeterinarioModule } from './veterinario/veterinario.module'
import { ContactoModule } from './contacto/contacto.module'
import { CitaModule } from './cita/cita.module';
import { AgendaModule } from './agenda/agenda.module';
import { ClienteModule } from './cliente/cliente.module';
import { EmpresaConvenioModule } from './empresaConvenio/empresaConvenio.module';



@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ServicioModule,       //Daniel
    MascotaModule,        //Daniel
    CalificacionModule ,  //Luccas
    RegistroMedicoModule, //Luccas
    TarjetaCreditoModule, //Gabriela
    PseModule,            //Gabriela
    VeterinarioModule,    //Juan
    ContactoModule,       //Juan
    CitaModule,           //Tony
    AgendaModule,         //Tony
    ClienteModule,        //Shadith
    EmpresaConvenioModule //Shadith

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
