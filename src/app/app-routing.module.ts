import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
