import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdenJerarquicoNecesidadesPage } from './orden-jerarquico-necesidades.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenJerarquicoNecesidadesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrdenJerarquicoNecesidadesPage]
})
export class OrdenJerarquicoNecesidadesPageModule {}
