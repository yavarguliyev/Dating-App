import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorsComponent } from './errors.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { TestErrorsComponent } from './test-errors/test-errors.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [ErrorsComponent, NotFoundComponent, ServerErrorComponent, TestErrorsComponent],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
