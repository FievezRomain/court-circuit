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


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'catalogue', component:CatalogComponent},
  {path:'panier', component:CartComponent},
  {path:'catalogue/:id', component:ArticleComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path: 'gestioncatalogue', component: CatalogManagerComponent},
  {path: 'gestionproduit/:id', component: ProductManagerComponent},
  {path: 'creationproduit', component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
