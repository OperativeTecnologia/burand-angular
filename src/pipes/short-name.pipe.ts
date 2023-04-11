import { Pipe, PipeTransform } from '@angular/core';
import { abbreviateLastName } from '../utils/abbreviateLastName';

/**
 * Pipe para abreviar o sobrenome de um nome completo.
 * Transforma um nome completo em uma string com o primeiro nome e o sobrenome abreviado.
 */
@Pipe({
  standalone: true,
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {
  /**
   * Transforma o nome completo fornecido em uma string com o primeiro nome e o sobrenome abreviado.
   *
   * @param name - O nome completo a ser transformado.
   * @returns Uma string com o primeiro nome e o sobrenome abreviado.
   */
  transform(name: string): string {
    if (!(name || '').length) {
      return '';
    }

    return abbreviateLastName(name);
  }
}
