import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ShopRoutes } from './shop.routing';
import { WidgetsModule } from '../widgets/widgets.module';

import { ProductDetailComponent } from './productDetail/productDetail.component';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ShopRoutes),
    WidgetsModule
  ],
  declarations: [
  	ProductDetailComponent,
  	ProductlistComponent
  ]
})

export class ShopModule {}
