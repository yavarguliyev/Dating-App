import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RolesModalComponent } from './roles-modal/roles-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [ConfirmDialogComponent, RolesModalComponent],
  exports: [
    ConfirmDialogComponent,
    RolesModalComponent
  ]
})
export class ModalsModule { }
