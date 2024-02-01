import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.css']
})
export class FilterPriceComponent {
  minPrice: number = 0;
  maxPrice: number = 0;

}
