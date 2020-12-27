import { FormModule } from './../form/form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPageComponent } from './client-page/client-page.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../container/layout/layout.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientPageComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule
  ],
  exports: [
    ClientPageComponent,
    RegisterComponent
  ]
})
export class HelperComponentsModule { }
