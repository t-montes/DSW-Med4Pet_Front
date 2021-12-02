import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MedioDePagoModule } from './medioDePago/medioDePago.module';


@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    MedioDePagoModule,    //Tony
    ClienteModule,        //Shadith
    EmpresaConvenioModule,//Shadith
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
