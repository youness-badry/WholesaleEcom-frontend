import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-normal',
  templateUrl: './filter-normal.component.html',
  styleUrls: ['./filter-normal.component.css']
})
export class FilterNormalComponent {

  optionsSelected: string[] = [];
  @Input() filterName: string = "";
  @Input() optionsData: any;

  constructor() {
  }

  ngOnInit() {
    // console.log(this.optionsSelected);
    
  }

  onSelectOption(option:any) {
    
    if (!this.optionsSelected.includes(option.name)) {
      this.optionsSelected.push(option.name);
    } else {
      this.optionsSelected =  this.optionsSelected.filter( val => val !== option.name);
    }

  }

  onDeselectOption(option:any) {
    this.optionsSelected =  this.optionsSelected.filter( val => val !== option.name);
  }

  isOptionSelected(optionName: string) {
    return this.optionsSelected.includes(optionName);
  }

}
