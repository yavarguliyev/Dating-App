import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RolesModalComponent } from 'src/app/shared/container/layout/roles-modal/roles-modal.component';
import { IUser } from 'src/app/shared/models/user';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
})
export class UserManagementComponent implements OnInit {
  users: Partial<IUser[]>;
  bsModalRef: BsModalRef;

  constructor(
    private adminService: AdminService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getUsersWithRoles();
  }

  getUsersWithRoles() {
    this.adminService.getUsersWithRoles().subscribe((users) => {
      this.users = users;
    }, error => {
      console.log(error);
    });
  }

  openRolesModal(user: IUser) {
    const config = {
      class: 'modal-dialog-centered',
      initialState: {
        user,
        roles: this.getRolesArray(user),
      },
    };
    this.bsModalRef = this.modalService.show(RolesModalComponent, config);
    this.bsModalRef.content.updateSelectedRoles.subscribe((values) => {
      const rolesToUpdate = {
        roles: [
          ...values.filter((el) => el.checked === true).map((el) => el.name),
        ],
      };
      if (rolesToUpdate) {
        this.adminService
          .updateUserRoles(user.username, rolesToUpdate.roles)
          .subscribe(() => {
            user.roles = [...rolesToUpdate.roles];
          });
      }
    });
  }

  private getRolesArray(user) {
    const roles = [];
    const userRoles = user.roles;
    const availableRoles: any[] = [
      { name: 'Admin', value: 'Admin' },
      { name: 'Moderator', value: 'Moderator' },
      { name: 'Member', value: 'Member' },
    ];

    availableRoles.forEach((role) => {
      let isMatch = false;
      for (const userRole of userRoles) {
        if (role.name === userRole) {
          isMatch = true;
          role.checked = true;
          roles.push(role);
          break;
        }
      }
      if (!isMatch) {
        role.checked = false;
        roles.push(role);
      }
    });
    return roles;
  }
}
