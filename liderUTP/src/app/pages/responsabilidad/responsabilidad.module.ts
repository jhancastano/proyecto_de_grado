import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResponsabilidadPage } from './responsabilidad.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsabilidadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResponsabilidadPage]
})
export class ResponsabilidadPageModule {}
