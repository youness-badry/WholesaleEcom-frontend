import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedModule } from './shared.module';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  categoriesData: any;
  baseUrl: string = "https://localhost:7206/api";
  getCategoriesUrl: string = this.baseUrl + "/categories";

  constructor(private http: HttpClient) { }

  fetchCategoriesData(): Observable<any> {
    return this.http.get(this.getCategoriesUrl);
  }


}
