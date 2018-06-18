import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { WelcomeComponent} from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component:WelcomeComponent
  }

=======
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
>>>>>>> b44c8fc7f9f925b4d176b53af13b0c340d8e1151
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
