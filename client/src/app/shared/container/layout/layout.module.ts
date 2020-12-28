import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HasRoleDirective } from '../../directives/has-role.directive';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PhotoManagementComponent } from './photo-management/photo-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RolesModalComponent } from './roles-modal/roles-modal.component';

@NgModule({
  declarations: [NavComponent, UserManagementComponent, PhotoManagementComponent, RolesModalComponent, HasRoleDirective],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [
    NavComponent,
    UserManagementComponent,
    PhotoManagementComponent,
    RolesModalComponent
  ],
  providers: []
})
export class LayoutModule { }
