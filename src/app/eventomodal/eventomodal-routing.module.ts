import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventomodalPage } from './eventomodal.page';

const routes: Routes = [
  {
    path: '',
    component: EventomodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventomodalPageRoutingModule {}
