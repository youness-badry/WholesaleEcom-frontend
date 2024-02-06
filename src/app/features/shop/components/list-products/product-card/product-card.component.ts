import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: Product = {
    id: 0,
    name: '',
    reference: '',
    description: '',
    price: 0,
    stockStatus: '',
    pictureUrl: '',
    brandName: '',
    subSubCategory: {
      id: 0,
      name: '',
    },
    productCharacteristics: []
  };

  constructor() {}


}
