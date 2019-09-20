import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuscaFuenteBienMalPage } from './busca-fuente-bien-mal.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaFuenteBienMalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuscaFuenteBienMalPage]
})
export class BuscaFuenteBienMalPageModule {}
