import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BasesParaSerLiderPage } from './bases-para-ser-lider.page';

const routes: Routes = [
  {
    path: '',
    component: BasesParaSerLiderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasesParaSerLiderPage]
})
export class BasesParaSerLiderPageModule {}
