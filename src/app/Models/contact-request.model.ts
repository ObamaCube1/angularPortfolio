import {FormControl, FormGroup} from '@angular/forms';

export class ContactRequestModel {
  mail!: FormControl<string>;
  request!: FormControl<string>;
}
