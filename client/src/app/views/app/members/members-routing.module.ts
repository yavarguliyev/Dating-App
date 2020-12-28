import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { PreventUnsavedChangesGuard } from 'src/app/shared/guards/prevent-unsaved-changes.guard';
import { MemberDetailedResolver } from 'src/app/shared/resolvers/member-detailed.resolver';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MembersComponent } from './members.component';
import { MessagesComponent } from './messages/messages.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    component: MembersComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'member-list', component: MemberListComponent },
      { path: 'card', component: CardComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'details/:username', component: DetailsComponent, resolve: {member: MemberDetailedResolver} },
      { path: 'edit', component: EditComponent, canDeactivate: [PreventUnsavedChangesGuard] },
      { path: 'photo-editor', component: PhotoEditorComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
