import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(
    public accountService: AccountService, 
    private router: Router, 
    private toastr: ToasterService
  ) { }

  ngOnInit(): void {
  }

  login() {
  }

  logout() {
    this.router.navigateByUrl('/')
  }
}
