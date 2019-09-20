import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LiderCarismaticoPage } from './lider-carismatico.page';

const routes: Routes = [
  {
    path: '',
    component: LiderCarismaticoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LiderCarismaticoPage]
})
export class LiderCarismaticoPageModule {}
