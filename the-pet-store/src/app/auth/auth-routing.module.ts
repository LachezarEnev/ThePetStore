import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [    
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        component: LoginComponent             
    },
    {
        path: 'register',
        component: RegisterComponent       
    }   
];

export const AuthRoutingModule = RouterModule.forChild(routes);