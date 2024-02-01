import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { SharedService } from '../../shared.service';
import { RemoveSpacesAndDiacriticsPipe } from 'src/app/core/pipes/remove-spaces-and-diacritics.pipe';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  activeCategory: string = "";

  subCategory: string = "";

  categoriesData: Category[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    const categoriesData$ = this.sharedService.fetchCategoriesData();
    categoriesData$.subscribe( response => {
      console.log(response);
      this.categoriesData = response;
      console.log(this.categoriesData);
    });
  }

  onMouseEnter(indexCategory: number) {
    this.activeCategory = this.categoriesData[indexCategory].name;
    
  }

  onMouseLeave(indexCategory: number) {
    this.activeCategory = "";
  }

  isActiveCategory(index: number) {
    return (this.activeCategory == this.categoriesData[index].name) ? true : false;
  }

  // RemoveSpacesAndDiacritics(str: string) {
  //   console.log(str);
  //   let newStr = this.removeSpacesAndDiacriticsPipe.transform(str);
  //   newStr = this.lowerCasePipe.transform(newStr);
  //   console.log(newStr);
  //   return newStr;
  // }
  

}
