import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CausaProblemasHumanosPage } from './causa-problemas-humanos.page';

const routes: Routes = [
  {
    path: '',
    component: CausaProblemasHumanosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CausaProblemasHumanosPage]
})
export class CausaProblemasHumanosPageModule {}
