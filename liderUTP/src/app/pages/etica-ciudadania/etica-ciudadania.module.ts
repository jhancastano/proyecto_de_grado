import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EticaCiudadaniaPage } from './etica-ciudadania.page';

const routes: Routes = [
  {
    path: '',
    component: EticaCiudadaniaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EticaCiudadaniaPage]
})
export class EticaCiudadaniaPageModule {}
