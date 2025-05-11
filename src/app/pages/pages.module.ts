import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PagesComponent,
    PostComponent
  ],
})
export class PagesModule { }
