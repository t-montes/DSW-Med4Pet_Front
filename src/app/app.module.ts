import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http'
>>>>>>> d26f6da73fbebda8b0499280317bc429dc09b619

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
    CitaModule,
    AgendaModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    TarjetaCreditoModule,
    HttpClientModule,
    PseModule,
=======
    HttpClientModule,
    VeterinarioModule,
    ContactoModule
>>>>>>> d26f6da73fbebda8b0499280317bc429dc09b619
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
