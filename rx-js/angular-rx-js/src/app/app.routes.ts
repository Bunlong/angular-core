import { Routes } from '@angular/router';

import { OfComponent } from './pages/of/of.component';
import { FromComponent } from './pages/from/from.component';
import { MergeMapComponent } from './pages/merge-map/merge-map.component';
import { CombineLatestComponent } from './pages/combine-latest/combine-latest.component';
import { FilterComponent } from './pages/filter/filter.component';

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
  {
    component: CombineLatestComponent,
    path: 'combine-latest'
  },
  {
    component: FilterComponent,
    path: 'filter'
  },
];
