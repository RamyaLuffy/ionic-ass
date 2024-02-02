import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginpagePageRoutingModule } from './loginpage-routing.module';

import { LoginpagePage } from './loginpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginpagePageRoutingModule
  ],
  declarations: [LoginpagePage]
})
export class LoginpagePageModule {}
