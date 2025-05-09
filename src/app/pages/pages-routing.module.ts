import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CustomerComponent } from './customer/customer.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path:'customer/:id/:name',
        component:CustomerComponent
      },
       {
        path:'customer/:id',
        component:CustomerComponent
      },
            {
        path:'customer',
        component:CustomerComponent
      },
      {
        path:'items',
        component:ItemsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
