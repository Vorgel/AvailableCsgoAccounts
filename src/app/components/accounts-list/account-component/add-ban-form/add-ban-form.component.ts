import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ban-form',
  templateUrl: './add-ban-form.component.html',
  styleUrls: ['./add-ban-form.component.scss']
})
export class AddBanFormComponent{
  
  @Output() banAdded: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      banInDays: new FormControl(0, [Validators.min(0), Validators.max(99)]),
      banInHours: new FormControl(0, [Validators.min(0), Validators.max(23)]),
      banInMinutes: new FormControl(0, [Validators.min(0), Validators.max(59)])
    });
  }

  addNewBan() {
    const banInDays = this.form.get('banInDays')!.value;
    const banInHours = this.form.get('banInHours')!.value;
    const banInMinutes = this.form.get('banInMinutes')!.value;

    this.banAdded.emit({ banInDays, banInHours, banInMinutes });

    this.form.reset();
  }
}
