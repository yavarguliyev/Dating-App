import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelperComponentsModule } from 'src/app/shared/helper-components/helper-components.module';
import { LayoutModule } from 'src/app/shared/container/layout/layout.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HelperComponentsModule,
    LayoutModule
  ]
})
export class AppModule { }
