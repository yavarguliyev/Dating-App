import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPageComponent } from './client-page/client-page.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../container/layout/layout.module';

@NgModule({
  declarations: [ClientPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    ClientPageComponent
  ]
})
export class HelperComponentsModule { }
