import { Component, Input, OnInit } from '@angular/core';
import { IMember } from 'src/app/shared/models/member';
import { MembersService } from 'src/app/shared/services/members.service';
import { PresenceService } from 'src/app/shared/services/presence.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() member: IMember;

  constructor(
    private memberService: MembersService,
    private toastr: ToasterService,
    public presence: PresenceService
  ) {}

  ngOnInit(): void {}

  addLike(member: IMember) {
    this.memberService.addLike(member.username).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs, '');
    });
  }
}
