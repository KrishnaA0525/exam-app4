import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appErrorWarningValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ErrorWarningValidatorDirective,
      multi: true
    }
  ]
})
export class ErrorWarningValidatorDirective implements Validator {

  @Input()
  warningPattern: string = '';
  @Input()
  warningMsg: string = '';
  @Input()
  errorPattern: string = '';
  @Input()
  errorMsg: string = '';

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    // control.statusChanges.subscribe((ns) => console.log(ns));
    if (this.getErrors(control)) {
      return { error: true };
    } else if (this.getWarnings(control)) {
      return { warning: true };
    }
    return null;
  }

  getErrors(control: AbstractControl): boolean {
    return +this.errorPattern ? control.value?.length > +this.errorPattern : false;
  }

  getWarnings(control: AbstractControl): boolean {
    return true;
  }
}
