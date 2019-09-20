import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiezDilemasEticosPage } from './diez-dilemas-eticos.page';

const routes: Routes = [
  {
    path: '',
    component: DiezDilemasEticosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiezDilemasEticosPage]
})
export class DiezDilemasEticosPageModule {}
