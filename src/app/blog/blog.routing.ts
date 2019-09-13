import { Routes } from '@angular/router';

import { BlogNoSidebarComponent } from './blogNoSidebar/blogNoSidebar.component';
import { BlogDetailComponent } from './blogDetail/blogDetail.component';

export const BlogsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogNoSidebarComponent
      },
      {
        path: 'blog-detail',
        component: BlogDetailComponent
      }
    ]
  }
];
