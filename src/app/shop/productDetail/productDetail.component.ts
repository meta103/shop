import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { EventLoggerService } from '../../service/event-logger.service';

@Component({
  selector: "angly-product-detail",
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  /* Variables */
  productId: string;
  productDetails$: Observable<any>;
  relatedProducts: any;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public router: Router,
    private db: AngularFireDatabase,
    public analytics: EventLoggerService
  ) {
    this.db
      .list('/products')
      .valueChanges()
      .subscribe(
        response => {
          this.relatedProducts = response;
        },
        err => console.log(err),
        () => this.relatedProducts
      );
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productDetails$ = this.db
      .list('/products', ref => ref.orderByChild('id').equalTo(this.productId))
      .valueChanges();
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  onClick(page: string) {
    this.router.navigate([`amazon/products/${page}`]);
    this.ngOnInit();
  }

  openAmazonnLink(link: string, productName: string) {
    this.analytics.logConversion(productName);
    window.open(link, '_blank');
  }
}
