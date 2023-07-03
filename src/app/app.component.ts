import { Component } from '@angular/core';
import { IAccount } from './models/IAccount';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AvailableCsgoAccounts';

  public accountList: IAccount[] = [];

  constructor(private dialog: MatDialog) {}

  showAddAccountPopup(): void {
    console.log(this.dialog.open);
    const dialogRef = this.dialog.open(AddAccountComponent, {
      width: '400px',
      height: '500 px',
      data: {}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.accountList.push(result);
      }
    });
  }
}


