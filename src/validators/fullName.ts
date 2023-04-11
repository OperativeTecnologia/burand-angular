import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Valida o formato do nome completo de um controle de formulário fornecido.
 * Um nome completo deve conter pelo menos duas palavras e a segunda palavra deve ter mais de um caractere.
 *
 * @example <caption>Valide se o campo corresponde a um nome com sobrenome</caption>
 * ```typescript
 * const control = new FormControl('John', fullNameValidator);
 *
 * console.log(control.errors); // {fullNameInvalid: true}
 * ```
 *
 * @param control - O `AbstractControl` do formulário a ser validado.
 * @returns Retorna um objeto de erro com a chave `fullNameInvalid` se o nome completo for inválido, caso contrário retorna `null`.
 */
export function fullNameValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }

  const split = String(control.value).split(' ');
  if (split.length > 1 && split[1].length > 1) {
    return null;
  }

  return { fullNameInvalid: true };
}
