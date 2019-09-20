import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelacionesHumanasPage } from './relaciones-humanas.page';

const routes: Routes = [
  {
    path: '',
    component: RelacionesHumanasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelacionesHumanasPage]
})
export class RelacionesHumanasPageModule {}
