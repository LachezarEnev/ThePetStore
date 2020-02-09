import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: 'pet',
    children: [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create',
    },
    {
        path: 'create',
        component: CreateComponent, 
        canActivate: [AuthGuard],
        data: {
          isAuthenticated: true
        }        
    } 
    ] 
  } 
];

export const PetRoutingModule = RouterModule.forChild(routes);