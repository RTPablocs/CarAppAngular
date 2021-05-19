import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items){
      return [];
    }
    if (!searchText){
      console.log(items);
      return items;
    }
    return items.filter(item => {
      const values = Object.values(item);
      if (values.includes(searchText)){
        return item;
      }
    });
  }

}
