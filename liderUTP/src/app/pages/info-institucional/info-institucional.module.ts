import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoInstitucionalPage } from './info-institucional.page';

const routes: Routes = [
  {
    path: '',
    component: InfoInstitucionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoInstitucionalPage]
})
export class InfoInstitucionalPageModule {}
