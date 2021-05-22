import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CatalogManagerComponent } from './catalog-manager/catalog-manager.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import  {CreateProductComponent} from './create-product/create-product.component';
import { ManagementComponent } from './management/management.component';
import { UsersManagerComponent } from './users-manager/users-manager.component';
import { UserManagerComponent } from './user-manager/user-manager.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'catalogue', component:CatalogComponent},
  {path:'panier', component:CartComponent},
  {path:'catalogue/:id', component:ArticleComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path: 'management', component:ManagementComponent},
  {path: 'managecatalogue', component: CatalogManagerComponent},
  {path: 'managecatalogue/:id', component: ProductManagerComponent},
  {path: 'manageusers', component: UsersManagerComponent},
  {path: 'manageusers/:id', component: UserManagerComponent},
  {path: 'creationproduit', component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
