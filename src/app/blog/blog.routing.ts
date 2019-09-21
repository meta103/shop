import { Routes } from '@angular/router';

import { BlogNoSidebarComponent } from './blogNoSidebar/blogNoSidebar.component';
import { BlogDetailComponent } from './blogDetail/blogDetail.component';

export const BlogsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogNoSidebarComponent
      },
      {
        path: ':id',
        component: BlogDetailComponent
      }
    ]
  }
];
