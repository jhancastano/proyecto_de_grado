import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsisteLaborLiderPage } from './consiste-labor-lider.page';

const routes: Routes = [
  {
    path: '',
    component: ConsisteLaborLiderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsisteLaborLiderPage]
})
export class ConsisteLaborLiderPageModule {}
