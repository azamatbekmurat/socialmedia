import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

const appRoutes: Routes = [
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'account',
  component: AccountComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
