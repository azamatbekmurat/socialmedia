import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';

import { WelcomeComponent} from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component:WelcomeComponent
  },
  {
    path: 'account/:id',
    component: AccountComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
