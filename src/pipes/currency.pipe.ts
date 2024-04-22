import { CurrencyPipe as AngularCurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

import { toCurrency } from '../utils/toCurrency';

/**
 * Pipe para formatar números como moeda usando o Angular's CurrencyPipe.
 * Transforma centavos para formato moeda.
 */
@Pipe({
  standalone: true,
  name: 'currency'
})
export class CurrencyPipe extends AngularCurrencyPipe implements PipeTransform {
  /**
   * Transforma centavos em sua representação formatada como moeda.
   *
   * @param value O valor numérico em centavos a ser formatado.
   * @param currencyCode (Opcional) Código da moeda a ser usado na formatação.
   * @param display (Opcional) O modo de exibição do símbolo da moeda. Pode ser 'code', 'symbol', 'symbol-narrow' ou uma string personalizada.
   * @param digitsInfo (Opcional) A string que determina como são formatados os dígitos após o ponto decimal. Por exemplo, '1.2-2' indica um número com no máximo 1 dígito à esquerda do ponto decimal e 2 à direita.
   * @param locale (Opcional) O local usado para formatar a moeda. Por padrão, é usado o local do navegador.
   *
   * @returns A representação formatada do valor como moeda.
   */
  override transform(
    value: number,
    currencyCode?: string,
    display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
    digitsInfo?: string,
    locale?: string
  ): null;
  override transform(
    value: number,
    currencyCode?: string,
    display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
    digitsInfo?: string,
    locale?: string
  ): string {
    return super.transform(toCurrency(value), currencyCode, display, digitsInfo, locale);
  }
}
