import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FriendAccountComponent } from './friend-account/friend-account.component';

const appRoutes: Routes = [
  {
    path: '',
    component:WelcomeComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'account/:id/search',
    component: SearchResultComponent
  },
  {
    path: 'account/:id',
    component: AccountComponent
  },
  {
    path: 'account/:id1/:id',
    component: FriendAccountComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
