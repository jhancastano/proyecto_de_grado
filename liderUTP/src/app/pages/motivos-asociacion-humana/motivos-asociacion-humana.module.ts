import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MotivosAsociacionHumanaPage } from './motivos-asociacion-humana.page';

const routes: Routes = [
  {
    path: '',
    component: MotivosAsociacionHumanaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MotivosAsociacionHumanaPage]
})
export class MotivosAsociacionHumanaPageModule {}
