import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SerHumanoComoEnteSocialPage } from './ser-humano-como-ente-social.page';

const routes: Routes = [
  {
    path: '',
    component: SerHumanoComoEnteSocialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SerHumanoComoEnteSocialPage]
})
export class SerHumanoComoEnteSocialPageModule {}
