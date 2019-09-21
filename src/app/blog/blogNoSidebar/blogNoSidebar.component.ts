import { Component, OnInit } from '@angular/core';
import { ChkService } from '../../service/chk.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PageTitleService } from '../../core/page-title/page-title.service';

@Component({
   selector: 'angly-blogNoSidebar',
   templateUrl: './blogNoSidebar.component.html',
   styleUrls: ['./blogNoSidebar.component.scss']
})

export class BlogNoSidebarComponent implements OnInit {

   /* Variables */
   posts$: Observable<any>;

   constructor(private service: ChkService, public router: Router, private pageTitleService: PageTitleService) {
      /* Page title */
      this.pageTitleService.setTitle(" Blog ");

      /* Page subTitle */
      this.pageTitleService.setSubTitle(" Las últimas noticias de misfavoritosde.com ");
   }

   ngOnInit() {
      this.posts$ = this.service.getPosts();
   }

   onClick(page: string) {
      this.router.navigate([`blog/${page}`]);
   }

}
