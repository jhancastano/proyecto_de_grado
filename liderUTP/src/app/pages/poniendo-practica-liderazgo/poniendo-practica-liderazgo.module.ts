import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PoniendoPracticaLiderazgoPage } from './poniendo-practica-liderazgo.page';

const routes: Routes = [
  {
    path: '',
    component: PoniendoPracticaLiderazgoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PoniendoPracticaLiderazgoPage]
})
export class PoniendoPracticaLiderazgoPageModule {}
