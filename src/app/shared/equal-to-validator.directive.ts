import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

import { equalTo } from './equal-to-validator';

@Directive({
  selector: '[appEqualTo][formControlName],[appEqualTo][formControl],[appEqualTo][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualToValidator),
    multi: true
  }]
})
export class EqualToValidator implements Validator, OnInit {
  @Input() appEqualTo: FormControl;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = equalTo(this.appEqualTo);
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }
}
