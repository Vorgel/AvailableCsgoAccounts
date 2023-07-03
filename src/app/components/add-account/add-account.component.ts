import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IAccount } from 'src/app/models/IAccount';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) { 
    
    this.form = new FormGroup({
    name: new FormControl(""),
    banInDays: new FormControl(0, [Validators.min(0), Validators.max(99)]),
    banInHours: new FormControl(0, [Validators.min(0), Validators.max(23)]),
    banInMinutes: new FormControl(0, [Validators.min(0), Validators.max(59)])
  });}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const name = this.form.get('name')!.value;
    const banInDays = this.form.get('banInDays')!.value;
    const banInHours = this.form.get('banInHours')!.value;
    const banInMinutes = this.form.get('banInMinutes')!.value;

    const accountData:IAccount = {
      name: name,
      banInDays: banInDays,
      banInHours: banInHours,
      banInMinutes: banInMinutes
    };

    this.dialogRef.close(accountData);
  }
}
