import { PagesModule } from './pages/pages.module';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

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
    loadChildren:()=> import("./pages/pages.module").then((m)=>m.PagesModule),
    providers: [provideHttpClient()]
  },
  {
    path:'**',
    component: NotfoundComponent
  }
];
