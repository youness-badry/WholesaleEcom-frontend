import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

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

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    
  }



}
