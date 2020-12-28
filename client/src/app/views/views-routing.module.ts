import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './app/errors/not-found/not-found.component';
import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      { path: '', loadChildren: () => import('./app/app.module').then(m => m.AppModule) },
      { path: 'app', loadChildren: () => import('./app/app.module').then(m => m.AppModule) },
      { path: '**', component: NotFoundComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
