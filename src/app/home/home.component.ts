import { Component, OnInit } from '@angular/core';
import { ChkService } from '../service/chk.service';
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

  constructor(private service: ChkService) {
    this.service.getServices().subscribe(
      response => {
        this.services = response;
      },
      err => console.log(err),
      () => this.services
    );

    this.service.getPosts().subscribe(
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

  ngOnInit() {}

  subscribeFormClasses: any = {
    rowClass: 'row',
    fieldClass: 'col-sm-12 col-md-6'
  };
}
