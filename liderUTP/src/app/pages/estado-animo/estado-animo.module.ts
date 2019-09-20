import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstadoAnimoPage } from './estado-animo.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoAnimoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstadoAnimoPage]
})
export class EstadoAnimoPageModule {}
