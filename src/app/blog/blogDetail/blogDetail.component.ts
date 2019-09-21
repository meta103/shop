import { Component, OnInit } from '@angular/core';
import { ChkService } from '../../service/chk.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'angly-blogDetail',
  templateUrl: './blogDetail.component.html',
  styleUrls: ['./blogDetail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  /* Variables */
  postDetail$: Observable<any>;
  postId: string;

  /*
   * Social links
   */
  socialDetails: any = [
    { icon: 'fa-facebook' },
    { icon: 'fa-twitter text-info' },
    { icon: 'fa fa-pinterest-p text-danger' },
  ]

  /*
   * Classes of social ul, li
   */
  socialsClasses: any = { ulClass: "", liClass: "", linkClass: "" }

  constructor(private service: ChkService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.postDetail$ = this.service.getASinglePosts(this.postId);
  }

}
