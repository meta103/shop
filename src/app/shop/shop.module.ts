import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ShopRoutes } from './shop.routing';
import { WidgetsModule } from '../widgets/widgets.module';

import { ProductDetailComponent } from './productDetail/productDetail.component';
import { ProductlistComponent } from './productlist/productlist.component';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ShopRoutes),
    WidgetsModule,
    NgbModalModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductlistComponent
  ]
})

export class ShopModule { }
