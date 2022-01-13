import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarUserPage } from './criar-user.page';

const routes: Routes = [
  {
    path: '',
    component: CriarUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarUserPageRoutingModule {}
