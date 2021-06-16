import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventomodalPageRoutingModule } from './eventomodal-routing.module';

import { EventomodalPage } from './eventomodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventomodalPageRoutingModule
  ],
  declarations: [EventomodalPage],
  exports : [EventomodalPage],
})
export class EventomodalPageModule {}
