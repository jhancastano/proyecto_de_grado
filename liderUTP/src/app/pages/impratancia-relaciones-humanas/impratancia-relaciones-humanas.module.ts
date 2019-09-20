import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImpratanciaRelacionesHumanasPage } from './impratancia-relaciones-humanas.page';

const routes: Routes = [
  {
    path: '',
    component: ImpratanciaRelacionesHumanasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImpratanciaRelacionesHumanasPage]
})
export class ImpratanciaRelacionesHumanasPageModule {}
