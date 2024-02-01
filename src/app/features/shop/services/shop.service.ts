import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl: string = "https://localhost:7206/api";
  getBrandsUrl: string = `${this.baseUrl}/brands`;

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
}
