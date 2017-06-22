import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isNumber(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let value = control.value;
        return isNaN(value) ? { 'number': { value } } : null;
    };
}