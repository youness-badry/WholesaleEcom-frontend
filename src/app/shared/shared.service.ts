import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  categoriesData: any;
  baseUrl: string = "https://localhost:7081/api";
  getCategoriesUrl: string = this.baseUrl + "/categories";

  constructor(private http: HttpClient) { }

  fetchCategoriesData(): Observable<any> {
    return this.http.get(this.getCategoriesUrl);
  }


}
