import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { EmpresaConvenioListComponent } from './empresaConvenio/empresaConvenio-list/empresaConvenio-list.component';
import { ConocenosComponent } from './informacion/conocenos/conocenos.component';
import { MasInformacionComponent } from './informacion/masInformacion/masInformacion.component';
import { RegistrarseComponent } from './informacion/registrarse/registrarse.component';
import { ServicioListarComponent } from './servicio/servicio-listar/servicio-listar.component';
import { VeterinarioDetailComponent } from './veterinario/veterinario-detail/veterinario-detail.component';
import { VeterinarioListComponent } from './veterinario/veterinario-list/veterinario-list.component';

const routes: Routes = [
  {
    path: "veterinarios",
    children: [
      {
        path: "list",
        component: VeterinarioListComponent
      },
      {
        path: ":id",
        component: VeterinarioDetailComponent
      }
    ]
  },
  {
    path:"empresasconvenio",
    component: EmpresaConvenioListComponent
  },
  {
    path:"masinformacion",
    component: MasInformacionComponent
  },
  {
    path:"conocenos",
    component: ConocenosComponent
  },
  {
    path:"registrarse",
    component: RegistrarseComponent
  },
  {
    path:"clientes",
    component: ClienteListComponent
  },
  {
    path: "clientes",
    children: [
      {
        path: "list",
        component: ClienteListComponent
      },
      {
        path: ":id",
        component: ClienteListComponent
      },
    ]
  },
  {
    path:"**",
    component:ServicioListarComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
