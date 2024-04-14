import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesModule } from '../utilities/utilities.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    ButtonModule,UtilitiesModule,FormsModule,CommonModule
  ]
})
export class LoginModule { }
