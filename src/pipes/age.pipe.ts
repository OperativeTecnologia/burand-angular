import { Pipe, PipeTransform } from '@angular/core';
import { calculateAge } from '../utils/calculateAge';

/**
 * Pipe para exibir a idade com base na data de nascimento.
 * Transforma uma data de nascimento em idade (em anos).
 */
@Pipe({
  standalone: true,
  name: 'age'
})
export class AgePipe implements PipeTransform {
  /**
   * Transforma a data de nascimento em idade.
   *
   * @param birthDateInput A data de nascimento, em formato Date ou string.
   * @returns A idade, em anos.
   */
  transform(birthDateInput: Date | string): number {
    return calculateAge(new Date(birthDateInput));
  }
}
