import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';

@Component({
  selector: 'mfd-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class faqComponent implements OnInit {

  /* Variables */
  supportContent: any;

  constructor(private pageTitleService: PageTitleService, private service: ChkService) {

    /* Page title */
    this.pageTitleService.setTitle(" Support ");

    /* Page subTitle */
    this.pageTitleService.setSubTitle(" Our latest news and learning articles. ");

    this.service.getFAQContent().
      subscribe(response => { this.supportContent = response },
        err => console.log(err),
        () => this.supportContent
      );
  }

  ngOnInit() {
  }


}
