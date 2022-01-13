import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProximoEventoPage } from './proximo-evento.page';

const routes: Routes = [
  {
    path: '',
    component: ProximoEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProximoEventoPageRoutingModule {}
