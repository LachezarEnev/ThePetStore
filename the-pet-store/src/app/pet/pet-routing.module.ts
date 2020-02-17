import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AdoptComponent } from './adopt/adopt.component';
import { BuyComponent } from './buy/buy.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { SearchComponent } from './search/search.component';
import { NoResultComponent } from './no-result/no-result.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [ 
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create'       
    },
    {
        path: 'create',
        component: CreateComponent                    
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
    } ,
    {
      path: 'no-result',
        component: NoResultComponent       
    },
    {
      path: 'category',
        component: CategoryComponent       
    }   
  ]

export const PetRoutingModule = RouterModule.forChild(routes);