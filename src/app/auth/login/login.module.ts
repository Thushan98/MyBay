import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MatButtonModule, RouterModule, FormsModule, ReactiveFormsModule, LoginRoutingModule, MatSnackBarModule],
  exports: [LoginComponent],
})
export class LoginModule { }
