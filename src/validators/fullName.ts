import { AbstractControl, ValidationErrors } from '@angular/forms';

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
