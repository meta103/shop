import { Component, OnInit } from '@angular/core';
import { ChkService } from '../service/chk.service';
import { AngularFireDatabase } from 'angularfire2/database';
declare var $: any;

@Component({
  selector: 'angly-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /* Variables */
  homeContent: any;
  services: any;
  projectGallary: any;
  posts: any;
  team: any;
  pricingContent: any;
  contact: any;
  videoContent: any;
  mobileFeatured: any;
  testimonial: any;
  footerLogo: any;

  constructor(private service: ChkService, private db: AngularFireDatabase) {
    this.service.getServices().subscribe(
      response => {
        this.services = response;
      },
      err => console.log(err),
      () => this.services
    );

    this.db.list('/posts').valueChanges().subscribe(
      response => {
        this.posts = response;
      },
      err => console.log(err),
      () => this.posts
    );

    this.service.getFooterLogoList().subscribe(
      response => {
        this.footerLogo = response;
      },
      err => console.log(err),
      () => this.footerLogo
    );
  }

  ngOnInit() { }

  subscribeFormClasses: any = {
    rowClass: 'row',
    fieldClass: 'col-sm-12 col-md-6'
  };
}
