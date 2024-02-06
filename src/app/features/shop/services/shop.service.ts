import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private baseUrl: string = "https://localhost:7081/api";
  private getBrandsUrl: string = `${this.baseUrl}/brands`;
  private getProductsOfSubsubcategoryUrl: string = `${this.baseUrl}/products/subsubcategory`;

  constructor(private http: HttpClient) { }


  getBrands(pageSize: number = -1, pageNumber: number = 1): Observable<any> {

    let brands$: Observable<any>;

    if (pageSize > 0 && pageNumber > 0) {
      brands$ = this.http.get(`${this.getBrandsUrl}?pagesize=${pageSize}&pageNumber=${pageNumber}`);
    
    } else {
      brands$ = this.http.get(this.getBrandsUrl);
    }
    
    return brands$;
    
  }

  getProductsOfSubSubCategory(subsubcategoryId: string): Observable<Product[]> {
    let productsOfSubsubcategory$ = this.http.get<Product[]>(`${this.getProductsOfSubsubcategoryUrl}/${subsubcategoryId}`);

    return productsOfSubsubcategory$;
  }

}
