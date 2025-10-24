import { Routes } from '@angular/router';
import {Home} from './home/home';
import {About} from './about/about';
import {Contact} from './contact/contact';
import {Login} from './login/login';
import {Profile} from './profile/profile';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact},
    {path:'login',component:Login},
    {path:'profile',component:Profile},
    {path:'**',component:PageNotFound}



];


