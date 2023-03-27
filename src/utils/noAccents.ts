/**
 * Remove os acentos de uma string.
 *
 * @param str A string que será tratada.
 * @returns A string sem acentos.
 */
export function noAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
