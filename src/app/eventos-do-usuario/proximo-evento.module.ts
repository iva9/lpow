import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProximoEventoPageRoutingModule } from './proximo-evento-routing.module';

import { ProximoEventoPage } from './proximo-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProximoEventoPageRoutingModule
  ],
  declarations: [ProximoEventoPage],
  exports : [ProximoEventoPage],
})
export class ProximoEventoPageModule {}
