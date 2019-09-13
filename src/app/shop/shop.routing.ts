import { Routes } from '@angular/router';

import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';

export const ShopRoutes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductlistComponent
      },
      {
        path: 'product-detail',
        component: ProductDetailComponent
      }
    ]
  }
];
