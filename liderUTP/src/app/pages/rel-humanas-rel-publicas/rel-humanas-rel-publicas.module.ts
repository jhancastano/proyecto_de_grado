import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelHumanasRelPublicasPage } from './rel-humanas-rel-publicas.page';

const routes: Routes = [
  {
    path: '',
    component: RelHumanasRelPublicasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelHumanasRelPublicasPage]
})
export class RelHumanasRelPublicasPageModule {}
