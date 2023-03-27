import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'shortName',
})
export class ShortNamePipe implements PipeTransform {
  transform(name: string): string {
    if (!(name || '').length) {
      return '';
    }

    const nameSprited = name.split(' ');
    const last =
      nameSprited.length > 1 ? nameSprited[nameSprited.length - 1] : '';

    return (
      nameSprited[0] +
      (last.length > 1 ? ' ' + last.substr(0, 1).toUpperCase() + '.' : '')
    );
  }
}
