import { AbstractControl, Validators } from '@angular/forms';

export function emailValidator(control: AbstractControl): Validators | null {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(control.value).toLowerCase())) {
    return null;
  }

  return { emailInvalid: true };
}
