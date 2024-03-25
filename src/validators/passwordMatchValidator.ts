import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Valida se o valor de um campo de senha corresponde ao valor de um campo de confirmação de senha fornecido.
 *
 * @example <caption>Valide se a senha corresponde ao campo confirmar senha</caption>
 * ```typescript
 * const passwordControl = new FormControl('password');
 * const confirmPasswordControl = new FormControl('confirmPassword');
 *
 * const form = new FormGroup({
 *   password: ['', [Validators.required, Validators.minLength(6)]],
 *   confirmPassword: ['', [Validators.required, Validators.minLength(6), passwordMatchValidator('password')]],
 * });
 *
 * console.log(form.errors); // { passwordMatchInvalid: true }
 * ```
 * @param fieldMatch O nome do campo de confirmação de senha a ser comparado.
 * @returns Uma função de validação que recebe um controle de formulário como entrada e retorna um objeto de erro se os campos de senha não corresponderem, caso contrário retorna `null`.
 */
export function passwordMatchValidator(fieldMatch: string): ValidatorFn | null {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!(control && control.parent && control.parent.controls && control.value)) {
      return null;
    }

    const password = control.value;

    const controls = control.parent.controls as any;
    const passwordConfirmation = controls[fieldMatch].value;

    return password === passwordConfirmation ? null : { passwordMatchInvalid: true };
  };
}
