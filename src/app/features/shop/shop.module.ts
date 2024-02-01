import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './components/shop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterPriceComponent } from './components/filters/filter-price/filter-price.component';
import { FilterNormalComponent } from './components/filters/filter-normal/filter-normal.component';
import { FilterToolbarComponent } from './components/filters/filter-toolbar/filter-toolbar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductCardComponent } from './components/list-products/product-card/product-card.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShopComponent,
    FilterPriceComponent,
    FilterNormalComponent,
    FilterToolbarComponent,
    ListProductsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
