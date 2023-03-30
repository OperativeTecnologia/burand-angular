import { AbstractControl, Validators } from '@angular/forms';

export function fullNameValidator(control: AbstractControl): Validators | null {
  if (!control.value) {
    return null;
  }

  const split = String(control.value).split(' ');
  if (split.length > 1 && split[1].length > 1) {
    return null;
  }

  return { fullNameInvalid: true };
}
