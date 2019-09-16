import { Routes } from '@angular/router';

import { ThankYouComponent } from './thankYou/thankYou.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NotFoundComponent } from './notFound/notFound.component';

export const SessionRoutes: Routes = [{
  path: '',
  redirectTo: 'maintenance',
  pathMatch: 'full'
}, {
  path: '',
  children: [{
    path: 'thank-you',
    component: ThankYouComponent
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }]
}];
