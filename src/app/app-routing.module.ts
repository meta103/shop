import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { faqComponent } from './faq/faq.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'amazon',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'amazon',
        component: HomeComponent
      },
      {
        path: 'amazon/products',
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'faq',
        component: faqComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: '**',
        loadChildren: () =>
          import('./session/session.module').then(m => m.SessionModule)
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
