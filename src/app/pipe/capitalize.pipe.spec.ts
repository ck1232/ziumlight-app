import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, words: boolean = false): any {
      if (value) {
          if (words) {
            return value.replace(/\b\w/g, first => first.toLocaleUpperCase());
          } else {
            return value.charAt(0).toUpperCase() + value.slice(1);
          }
      }
      return value;
  }

}
