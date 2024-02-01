import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarquesComponent } from './features/marques/marques.component';
import { NosServicesComponent } from './features/nos-services/nos-services.component';
import { ShopComponent } from './features/shop/components/shop.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { 
    path: 'shop/:category/:subcategory/:subsubcategory', 
    component: ShopComponent
  },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'marques', component: MarquesComponent},
  { path: 'services', component: NosServicesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
