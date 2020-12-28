import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesModalComponent } from './roles-modal/roles-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LayoutModule } from '../container/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule
  ],
  declarations: [RolesModalComponent, ConfirmDialogComponent],
  exports: [
    RolesModalComponent,
    ConfirmDialogComponent
  ]
})
export class ModalsModule { }
