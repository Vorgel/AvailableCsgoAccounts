import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IAccount } from 'src/app/models/IAccount';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnChanges {

  @Input() accountsList!: IAccount[];
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.accountsList)
    {
      console.log(this.accountsList)
    }
  }

  handleRemoveAccount(account: IAccount) {
    const index = this.accountsList.findIndex(a => a.name === account.name);
  
    if (index !== -1) {
      this.accountsList.splice(index, 1);
    }
  }
}
