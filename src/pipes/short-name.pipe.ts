import { Pipe, PipeTransform } from '@angular/core';
import { abbreviateLastName } from '../utils';

@Pipe({
  standalone: true,
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {
  transform(name: string): string {
    if (!(name || '').length) {
      return '';
    }

    return abbreviateLastName(name);
  }
}
