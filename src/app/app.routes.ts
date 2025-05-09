import { PagesModule } from './pages/pages.module';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },{
    path:'pages',
    loadChildren:()=> import("./pages/pages.module").then((m)=>m.PagesModule)
  },
  {
    path:'**',
    component: NotfoundComponent
  }
];
