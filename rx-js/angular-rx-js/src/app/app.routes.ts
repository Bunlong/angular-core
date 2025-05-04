import { Routes } from '@angular/router';

import { OfComponent } from './pages/of/of.component';
import { FromComponent } from './pages/from/from.component';
import { MergeMapComponent } from './pages/merge-map/merge-map.component';

export const routes: Routes = [
  {
    component: OfComponent,
    path: 'of'
  },
  {
    component: FromComponent,
    path: 'from'
  },
  {
    component: MergeMapComponent,
    path: 'merge-map'
  },
];
