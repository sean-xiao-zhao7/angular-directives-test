import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: string[], filterString: string): string[] {
    if (value.length == 0) {
      return value;
    } else {
      const filteredValues = [];
      for (const item of value) {
        if (item.toLowerCase().includes(filterString)) {
          filteredValues.push(item);
        }
      }
      return filteredValues;
    }
  }
}
