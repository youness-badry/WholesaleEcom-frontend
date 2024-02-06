import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { ShopService } from '../services/shop.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  productsOfSubsubcategory: Product[] = [];

  brands: any = [
    {
      "numberproducts": 1,
      "name": "aeg"
    },
    {
      "numberproducts": 1,
      "name": "arzum"
    },
    {
      "numberproducts": 2,
      "name": "bosh"
    },
    {
      "numberproducts": 2,
      "name": "mellerware"
    },
    {
      "numberproducts": 3,
      "name": "moulinex"
    },
    {
      "numberproducts": 1,
      "name": "siera"
    },
    {
      "numberproducts": 1,
      "name": "taurus"
    }
  ];

  constructor(private route: ActivatedRoute, private shopService: ShopService) {
    
  }

  ngOnInit() {
    
    this.route.paramMap
    .pipe(
      map(e => e.get("subsubcategoryId") as string),
      switchMap( (subsubcategoryId: string) => {
         return this.shopService.getProductsOfSubSubCategory(subsubcategoryId)
      })
    )
    .subscribe((products: Product[]) => {
      this.productsOfSubsubcategory = products;
      
    });
  }



}
