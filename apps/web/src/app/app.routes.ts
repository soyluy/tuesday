import { Route } from '@angular/router';
import { SignupPage } from '../signup/signup.page';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: SignupPage
    }
];
