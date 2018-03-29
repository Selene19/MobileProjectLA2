import { NgModule } from '@angular/core';

import { EqualToValidator } from './equal-to-validator.directive';


@NgModule({
  declarations: [
    EqualToValidator,
	
  ],
  exports: [
    EqualToValidator,
	
  ]
})
export class SharedModule {
}
