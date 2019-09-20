import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClasificacionRelacionesHumanasPage } from './clasificacion-relaciones-humanas.page';

const routes: Routes = [
  {
    path: '',
    component: ClasificacionRelacionesHumanasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClasificacionRelacionesHumanasPage]
})
export class ClasificacionRelacionesHumanasPageModule {}
