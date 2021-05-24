import {Pipe, PipeTransform} from '@angular/core';
import {Filters} from './filters';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(items: any[], filtering: Filters): any {
    if (!items) {
      return [];
    }

    if (!filtering) {
      return items;
    }
    return items.filter(item => {
      return Object.keys(filtering).every(key => {
        if (key.includes('price') || key.includes('miles')) {
            return item[key] <= filtering[key];
        }else{
          return item[key] === filtering[key];
        }
      });
    });
  }
}
