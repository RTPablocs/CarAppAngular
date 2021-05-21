import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(items: any[], filtering: any[]): any {
    if (!items) {
      return [];
    }

    if (!filtering) {
      return items;
    }
    return items.filter(item => {

    });
  }

}
