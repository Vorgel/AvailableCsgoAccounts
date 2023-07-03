import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { MatInputModule } from '@angular/material/input';
import { AddBanFormComponent } from './components/accounts-list/account-component/add-ban-form/add-ban-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponentComponent } from './components/accounts-list/account-component/account-component.component';
import { TimerComponent } from './components/accounts-list/account-component/timer/timer.component';
import { StatusLabelComponent } from './components/accounts-list/account-component/status-label/status-label.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponentComponent,
    AccountsListComponent,
    TimerComponent,
    AddBanFormComponent,
    StatusLabelComponent,
    AddAccountComponent,
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
