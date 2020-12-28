import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'members', loadChildren: () => import('./members/members.module').then(m => m.MembersModule) },
      { path: 'errors', loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
