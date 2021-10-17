import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalificacionModule} from './calificacion/calificacion.module'
import {RegistroMedicoModule} from './registroMedico/registroMedico.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    CalificacionModule,
    RegistroMedicoModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
