import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RolesModalComponent } from './roles-modal/roles-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [RolesModalComponent, ConfirmDialogComponent],
  exports: [
    RolesModalComponent,
    ConfirmDialogComponent
  ]
})
export class ModalsModule { }
