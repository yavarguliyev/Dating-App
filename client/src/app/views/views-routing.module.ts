import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      { path: '', loadChildren: () => import('./app/app.module').then(m => m.AppModule) },
      { path: 'app', loadChildren: () => import('./app/app.module').then(m => m.AppModule) },
      { path: '**', redirectTo: '/error/404' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
