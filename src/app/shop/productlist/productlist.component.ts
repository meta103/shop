import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { ChkService } from '../../service/chk.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'angly-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  /* Variables */
  productlist: any;
  categories: any;
  productsList: any;

  constructor(
    private pageTitleService: PageTitleService,
    private service: ChkService,
    public router: Router,
    private db: AngularFireDatabase
  ) {
    /* Page title */
    this.pageTitleService.setTitle(' Tienda ');

    /* Page subTitle */
    this.pageTitleService.setSubTitle(
      ' La mejor selección de favoritos de Amazon '
    );

    this.db.list('/products').valueChanges().subscribe(
      response => {
        this.productsList = response;
      },
      err => console.log(err),
      () => this.productsList
    );
  }

  ngOnInit() {
  }

  onClick(page: string) {
    this.router.navigate([`amazon/products/${page}`]);
  }
}


