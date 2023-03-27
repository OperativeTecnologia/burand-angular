/**
 * Remove os acentos de uma string.
 *
 * @param str A string a ser tratada.
 * @returns A string sem acentos.
 */
export function onlyDigits(text: string): string {
  return text.replace(/\D/g, '');
}
