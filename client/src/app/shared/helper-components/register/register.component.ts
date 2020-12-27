import { ToasterService } from 'src/app/shared/services/toaster.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { parseDate } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  registerForm!: FormGroup;
  maxDate!: Date;
  validationErrors: string[] = [];

  constructor(
    private accountService: AccountService,
    private toastr: ToasterService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.intitializeForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  intitializeForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      // username: ['', [Validators.required]],
      // knownAs: ['', Validators.required],
      // dateOfBirth: ['', Validators.required],
      // city: ['', Validators.required],
      // country: ['', Validators.required],
      // password: [
      //   '',
      //   [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      // ],
      // confirmPassword: ['', [Validators.required]],
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value ===
        (control?.parent?.controls as { [key: string]: AbstractControl })[
          matchTo
        ].value
        ? null
        : { isMatching: true };
    };
  }

  register() {}

  cancel() {
    this.cancelRegister.emit(false);
  }
}
