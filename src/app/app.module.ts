import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
