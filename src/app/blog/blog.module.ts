import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BlogsRoutes } from './blog.routing';
import { WidgetsModule } from '../widgets/widgets.module';

import { BlogNoSidebarComponent } from './blogNoSidebar/blogNoSidebar.component';
import { BlogDetailComponent } from './blogDetail/blogDetail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(BlogsRoutes),
    WidgetsModule
  ],
  declarations: [
    BlogNoSidebarComponent,
    BlogDetailComponent
  ]
})

export class BlogModule {}
