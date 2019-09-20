import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipoLiderazgoPage } from './tipo-liderazgo.page';

const routes: Routes = [
  {
    path: '',
    component: TipoLiderazgoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipoLiderazgoPage]
})
export class TipoLiderazgoPageModule {}
