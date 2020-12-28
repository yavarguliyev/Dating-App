import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LayoutModule } from 'src/app/shared/container/layout/layout.module';

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TabsModule.forRoot(),
    LayoutModule,
  ]
})
export class AdminModule { }
