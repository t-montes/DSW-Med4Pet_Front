import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicioModule} from './servicio/servicio.module';
import { MascotaModule} from './mascota/mascota.module';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaCreditoModule } from './tarjetaCredito/tarjetaCredito.module'
import { PseModule } from './pse/pse.module';

>>>>>>> ea3935b1bdacf8932b0808f1ad6e8169e31943ec

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
<<<<<<< HEAD
    HttpClientModule,
    ServicioModule,       //Daniel
    MascotaModule,        //Daniel
    TarjetaCreditoModule, //Gabriela
    PseModule,            //Gabriela
    VeterinarioModule,    //Juan Carlos
    ContactoModule,       //Juan Carlos
    CitaModule,           //Tony
    AgendaModule          //Tony
>>>>>>> ea3935b1bdacf8932b0808f1ad6e8169e31943ec
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
