import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorsComponent } from './errors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { TestErrorsComponent } from './test-errors/test-errors.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    component: ErrorsComponent,
    children: [
      { path: 'not-found', component: NotFoundComponent },
      { path: 'server-error', component: ServerErrorComponent },
      { path: 'test-errors', component: TestErrorsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
