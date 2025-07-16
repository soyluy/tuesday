import { Route } from '@angular/router';
import { SignupPage } from '../auth/signup/signup.page';
import { LoginPage } from '../auth/login/login.page';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'login', //TODO: Create a landing page
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: SignupPage
    },
    {
        path: 'login',
        component: LoginPage
    }
];
