import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RiesgosCaerPage } from './riesgos-caer.page';

const routes: Routes = [
  {
    path: '',
    component: RiesgosCaerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RiesgosCaerPage]
})
export class RiesgosCaerPageModule {}
