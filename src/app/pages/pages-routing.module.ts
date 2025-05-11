import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guard/auth-guard.service';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'post'
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'post/:id/:name',
        component: PostComponent
      },
      {
        path: 'post/:id',
        component: PostComponent
      },
      {
        path: 'post',
        component: PostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
