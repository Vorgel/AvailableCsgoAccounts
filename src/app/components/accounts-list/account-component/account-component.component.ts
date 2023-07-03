import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAccount } from 'src/app/models/IAccount';

@Component({
  selector: 'app-account-component',
  templateUrl: './account-component.component.html',
  styleUrls: ['./account-component.component.scss']
})
export class AccountComponentComponent {
  @Input() account!: IAccount;
  @Output() removeAccountEvent = new EventEmitter<any>();

  constructor() { }
  
  handleBanAdded(event: any) {
    const banInDays = event.banInDays;
    const banInHours = event.banInHours;
    const banInMinutes = event.banInMinutes;
  
    this.account = { 
      ...this.account, 
      banInDays: banInDays, 
      banInHours: banInHours,
      banInMinutes: banInMinutes  
    };
  }

  isAccountAvailable(): boolean {
    return this.account.banInDays === 0 && this.account.banInHours === 0 && this.account.banInMinutes === 0;
  }

  removeAccount(): void {
    this.removeAccountEvent.emit(this.account);
  }

  removeBan(): void {
    this.account = { 
      ...this.account, 
      banInDays: 0, 
      banInHours: 0,
      banInMinutes: 0  
    };
  }
}
