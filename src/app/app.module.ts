import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicioModule} from './servicio/servicio.module';
import { MascotaModule} from './mascota/mascota.module';

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
    ServicioModule,
    MascotaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
