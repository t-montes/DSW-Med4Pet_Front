import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { EmpresaConvenioListComponent } from './empresaConvenio/empresaConvenio-list/empresaConvenio-list.component';
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
    path:"**",
    component:ServicioListarComponent
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
