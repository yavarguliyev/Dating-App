import { Component, OnInit } from '@angular/core';
import { IUser } from './shared/models/user';
import { AccountService } from './shared/services/account.service';
import { PresenceService } from './shared/services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dating App';

  users: any;

  constructor(
    private accountService: AccountService,
    private presence: PresenceService
  ) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: IUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (user) {
      this.accountService.setCurrentUser(user);
    }
  }
}
