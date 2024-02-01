import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpacesAndDiacritics'
})
export class RemoveSpacesAndDiacriticsPipe implements PipeTransform {

  transform(value: any): any {
    let str = value;
    if (str === undefined)
      return 'undefined';

    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return str.replace(/\s/g, "-");
  }

}
