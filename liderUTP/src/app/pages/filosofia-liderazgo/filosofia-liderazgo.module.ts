import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilosofiaLiderazgoPage } from './filosofia-liderazgo.page';

const routes: Routes = [
  {
    path: '',
    component: FilosofiaLiderazgoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilosofiaLiderazgoPage]
})
export class FilosofiaLiderazgoPageModule {}
