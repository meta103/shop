import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { ChkService } from '../../service/chk.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'angly-product-detail',
	templateUrl: './productDetail.component.html',
	styleUrls: ['./productDetail.component.scss']
})
export class ProductDetailComponent implements OnInit {
	/* Variables */
	productId: string;
	$productDetails: any;
	relatedProducts: any;

	constructor(private pageTitleService: PageTitleService, private service: ChkService, private route: ActivatedRoute, private modalService: NgbModal) {
		/* Page title */
		this.pageTitleService.setTitle(" Product Detail ");

		/* Page subTitle */
		this.pageTitleService.setSubTitle(" 25% Off and Free global delivery for all products ");


		this.service.getRelatedProducts().
			subscribe(response => { this.relatedProducts = response },
				err => console.log(err),
				() => this.relatedProducts
			);
	}

	ngOnInit() {
		this.productId = this.route.snapshot.paramMap.get('id');
		this.$productDetails = this.service.getASingleProduct(this.productId);

	}

	openModal(content) {
		this.modalService.open(content, { centered: true });
	}


}
