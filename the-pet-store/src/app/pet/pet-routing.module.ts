import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CreateComponent } from './create/create.component';
import { AdoptComponent } from './adopt/adopt.component';
import { BuyComponent } from './buy/buy.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { SearchComponent } from './search/search.component';

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
    },
    {
      path: 'adopt',
        component: AdoptComponent 
    },
    {
      path: 'buy',
        component: BuyComponent 
    },
    {
      path: 'details/:id',
        component: DetailsComponent 
    },
    {
      path: 'edit/:id',
        component: EditComponent 
    },
    {
      path: 'my-pets',
        component: MyPetsComponent 
    },
    {
      path: 'search',
        component: SearchComponent 
    }    
    ], canActivate: [AuthGuard],
      data: {
      isAuthenticated: true
    } 
  } 
];

export const PetRoutingModule = RouterModule.forChild(routes);