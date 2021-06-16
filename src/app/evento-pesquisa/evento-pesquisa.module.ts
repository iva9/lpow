import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoPesquisaPageRoutingModule } from './evento-pesquisa-routing.module';

import { EventoPesquisaPage } from './evento-pesquisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoPesquisaPageRoutingModule
  ],
  declarations: [EventoPesquisaPage]
})
export class EventoPesquisaPageModule {}
