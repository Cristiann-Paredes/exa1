import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Asegúrate de incluir IonicModule
    RouterModule.forChild([{ path: '', component: HomePage }]),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
