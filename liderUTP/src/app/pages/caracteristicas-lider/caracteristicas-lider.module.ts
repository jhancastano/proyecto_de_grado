import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CaracteristicasLiderPage } from './caracteristicas-lider.page';

const routes: Routes = [
  {
    path: '',
    component: CaracteristicasLiderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CaracteristicasLiderPage]
})
export class CaracteristicasLiderPageModule {}
