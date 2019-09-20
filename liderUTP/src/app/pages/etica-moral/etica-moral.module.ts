import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EticaMoralPage } from './etica-moral.page';

const routes: Routes = [
  {
    path: '',
    component: EticaMoralPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EticaMoralPage]
})
export class EticaMoralPageModule {}
