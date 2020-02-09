import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    children: [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        component: LoginComponent, 
        canActivate: [AuthGuard],
        data: {
          isAuthenticated: false
        }        
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard],
        data: {
          isAuthenticated: false
        }  
    }
    ] 
  } 
];

export const AuthRoutingModule = RouterModule.forChild(routes);