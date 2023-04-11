import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Valida o formato do endereço de e-mail.
 *
 * @example <caption>Valide se o campo corresponde a um e-mail válido</caption>
 * ```typescript
 * const control = new FormControl('bad@', emailValidator);
 *
 * console.log(control.errors); // {emailInvalid: true}
 * ```
 *
 * @param control - O `AbstractControl` do formulário a ser validado.
 * @returns Retorna um objeto de erro com a chave `emailInvalid` se o e-mail for inválido, caso contrário retorna `null`.
 */
export function emailValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }

  const REGEX_EMAIL =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (REGEX_EMAIL.test(control.value.toLowerCase())) {
    return null;
  }

  return { emailInvalid: true };
}
