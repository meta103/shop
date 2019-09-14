import { Routes } from '@angular/router';

import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';

export const ShopRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductlistComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ]
  }
];
