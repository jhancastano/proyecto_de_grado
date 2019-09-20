import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LiderNaceSehacePage } from './lider-nace-sehace.page';

const routes: Routes = [
  {
    path: '',
    component: LiderNaceSehacePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LiderNaceSehacePage]
})
export class LiderNaceSehacePageModule {}
