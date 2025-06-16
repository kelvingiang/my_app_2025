import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static cannotContainSpace(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value && (control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
}