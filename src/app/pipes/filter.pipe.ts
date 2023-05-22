import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!searchText || searchText.trim() === '') {
      return items;
    }

    searchText = searchText.toLowerCase().trim();

    return items.filter((item: any) => {
      return (
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText)
      );
    });
  }
}
