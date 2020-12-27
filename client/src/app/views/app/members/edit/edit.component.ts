import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';
import { IMember } from 'src/app/shared/models/member';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { MembersService } from 'src/app/shared/services/members.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  @ViewChild('editForm') editForm!: NgForm;
  member!: IMember;
  user!: IUser;

  @HostListener('window:beforeunload', ['$event']) unloadNotification(
    $event: any
  ) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private accountService: AccountService,
    private memberService: MembersService,
    private toastr: ToasterService
  ) {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.memberService.getMember(this.user.username).subscribe((member) => {
      this.member = member;
    });
  }

  updateMember() {
    this.memberService.updateMember(this.member).subscribe(() => {
      this.toastr.success('Profile updated successfully', 'Update');
      this.editForm.reset(this.member);
    });
  }
}
