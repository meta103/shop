import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { ChkService } from '../../service/chk.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
	selector: 'angly-product-detail',
	templateUrl: './productDetail.component.html',
	styleUrls: ['./productDetail.component.scss']
})
export class ProductDetailComponent implements OnInit {
	/* Variables */
	productId: string;
	productDetails$: Observable<any>;
	relatedProducts: any;

	constructor(private pageTitleService: PageTitleService, private service: ChkService, private route: ActivatedRoute, private modalService: NgbModal, public router: Router, private db: AngularFireDatabase) {
		/* Page title */
		this.pageTitleService.setTitle(" Product Detail ");

		/* Page subTitle */
		this.pageTitleService.setSubTitle(" 25% Off and Free global delivery for all products ");


		this.db.list('/products').valueChanges().
			subscribe(response => { this.relatedProducts = response },
				err => console.log(err),
				() => this.relatedProducts
			);
	}

	ngOnInit() {
		this.productId = this.route.snapshot.paramMap.get('id');
		this.productDetails$ = this.db.list('/products', ref => ref.orderByChild('id').equalTo(this.productId)).valueChanges();

	}

	openModal(content) {
		this.modalService.open(content, { centered: true });
	}

	onClick(page: string) {
		this.router.navigate([`amazon/products/${page}`]);
		this.ngOnInit();
	}
}
