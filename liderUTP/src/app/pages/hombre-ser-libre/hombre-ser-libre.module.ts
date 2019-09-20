import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HombreSerLibrePage } from './hombre-ser-libre.page';

const routes: Routes = [
  {
    path: '',
    component: HombreSerLibrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HombreSerLibrePage]
})
export class HombreSerLibrePageModule {}
