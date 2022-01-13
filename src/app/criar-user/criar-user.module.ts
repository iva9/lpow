import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarUserPageRoutingModule } from './criar-user-routing.module';

import { CriarUserPage } from './criar-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarUserPageRoutingModule
  ],
  exports:
  [ CriarUserPage ],
  declarations: [CriarUserPage]
})
export class CriarUserPageModule {}
