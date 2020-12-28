import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { CardComponent } from './card/card.component';
import { MemberListComponent } from './member-list/member-list.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/shared/container/layout/layout.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
import { TimeagoModule } from 'ngx-timeago';
import { MessagesComponent } from './messages/messages.component';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  declarations: [
    MembersComponent,
    ListComponent,
    EditComponent,
    DetailsComponent,
    PhotoEditorComponent,
    CardComponent,
    MemberListComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    TimeagoModule.forRoot(),
    NgxGalleryModule,
    FormsModule,
    LayoutModule,
    FileUploadModule
  ],
})
export class MembersModule {}
