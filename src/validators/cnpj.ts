import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cnpjValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }

  const cnpj = String(control.value).replace(/\D/g, '');

  if (cnpj.length !== 14) {
    return { cnpjInvalid: true };
  }

  if (
    !cnpj ||
    cnpj.length !== 14 ||
    cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999'
  ) {
    return { cnpjInvalid: true };
  }

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += Number(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  let resultado = (soma % 11 < 2 ? 0 : 11 - (soma % 11)).toString();
  if (resultado !== digitos.charAt(0)) {
    return { cnpjInvalid: true };
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += Number(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  resultado = (soma % 11 < 2 ? 0 : 11 - (soma % 11)).toString();
  if (resultado !== digitos.charAt(1)) {
    return { cnpjInvalid: true };
  }

  return null;
}
