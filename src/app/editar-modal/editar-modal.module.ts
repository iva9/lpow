import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarModalPageRoutingModule } from './editar-modal-routing.module';

import { EditarModalPage } from './editar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarModalPageRoutingModule
  ],
  declarations: [EditarModalPage],
  exports : [EditarModalPage],
})
export class EditarModalPageModule {}
