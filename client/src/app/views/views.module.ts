import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { LayoutModule } from '../shared/container/layout/layout.module';


@NgModule({
  declarations: [ViewsComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
