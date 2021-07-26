import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: 'joinnow', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'course', component: CourseComponent
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'cart/joinnow', redirectTo: '/login', pathMatch: 'full'
    }
];