import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [TextInputComponent, DateInputComponent],
  exports: [
    TextInputComponent, 
    DateInputComponent
  ]
})
export class FormModule { }
