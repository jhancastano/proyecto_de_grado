import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstadoAnimoRelacionesHumanasPage } from './estado-animo-relaciones-humanas.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoAnimoRelacionesHumanasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstadoAnimoRelacionesHumanasPage]
})
export class EstadoAnimoRelacionesHumanasPageModule {}
