import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaCreditoModule } from './tarjetaCredito/tarjetaCredito.module'
import { PseModule } from './pse/pse.module';


import { VeterinarioModule } from './veterinario/veterinario.module'
import { ContactoModule } from './contacto/contacto.module'
import { CitaModule } from './cita/cita.module';
import { AgendaModule } from './agenda/agenda.module';
import { ClienteModule } from './cliente/cliente.module'
import { EmpresaConvenioModule } from './empresaConvenio/empresaConvenio.module'
import { Cliente } from './cliente/cliente';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    TarjetaCreditoModule, //Gabriela
    PseModule,            //Gabriela
    VeterinarioModule,    //Juan Carlos
    ContactoModule,       //Juan Carlos
    CitaModule,           //Tony
    AgendaModule,          //Tony
    ClienteModule,        //Shadith
    EmpresaConvenioModule //Shadith
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
