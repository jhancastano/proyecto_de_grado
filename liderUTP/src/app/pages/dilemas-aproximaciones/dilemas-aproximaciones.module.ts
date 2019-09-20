import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DilemasAproximacionesPage } from './dilemas-aproximaciones.page';

const routes: Routes = [
  {
    path: '',
    component: DilemasAproximacionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DilemasAproximacionesPage]
})
export class DilemasAproximacionesPageModule {}
