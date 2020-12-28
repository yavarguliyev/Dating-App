import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelperComponentsModule } from 'src/app/shared/helper-components/helper-components.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HelperComponentsModule,
    PaginationModule.forRoot(),
    FormsModule,
    TimeagoModule.forRoot(),
  ]
})
export class AppModule { }
