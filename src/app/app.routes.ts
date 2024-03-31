import { Routes } from '@angular/router';

import { BlankComponent } from './blank/blank.component';
import { ConcurrentComponent } from './concurrent/concurrent.component';
import { ConcurrentPrioComponent } from './concurrent-prio/concurrent-prio.component';
import { NativeComponent } from './native/native.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: BlankComponent,
  },
  {
    path: 'native',
    component: NativeComponent,
  },
  {
    path: 'scheduled',
    component: NativeComponent,
  },
  {
    path: 'concurrent',
    component: ConcurrentComponent,
  },
  {
    path: 'concurrent-prio',
    component: ConcurrentPrioComponent,
  },
];
