import { Component, OnInit } from '@angular/core';
import { IMember } from 'src/app/shared/models/member';
import { IPagination } from 'src/app/shared/models/pagination';
import { MembersService } from 'src/app/shared/services/members.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  members!: Partial<IMember[]>;
  predicate = 'liked';
  pageNumber = 1;
  pageSize = 5;
  pagination!: IPagination;

  constructor(private memberService: MembersService) {}

  ngOnInit(): void {
    this.loadLikes();
  }

  loadLikes() {
    this.memberService
      .getLikes(this.predicate, this.pageNumber, this.pageSize)
      .subscribe((response) => {
        this.members = response.result;
        this.pagination = response.pagination;
      });
  }

  pageChanged(event: any) {
    this.pageNumber = event.page;
    this.loadLikes();
  }
}
