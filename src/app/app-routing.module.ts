import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './mini-project/core/layout/layout.component';
import { ListComponent } from './mini-project/list/list.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'curses',
    // pathMatch: 'full',
    component: LayoutComponent
  },
  {
    path: 'list',
    component: ListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
