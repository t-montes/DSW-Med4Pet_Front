import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConocenosComponent} from './conocenos/conocenos.component'
import {MasInformacionComponent} from './masInformacion/masInformacion.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConocenosComponent,MasInformacionComponent],
  exports:[ConocenosComponent,MasInformacionComponent]
})
export class InformacionModule { }
