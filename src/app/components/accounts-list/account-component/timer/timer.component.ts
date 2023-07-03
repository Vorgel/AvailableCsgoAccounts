import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IAccount } from 'src/app/models/IAccount';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnChanges{
  @Input() account: IAccount | undefined;
  
  daysDiffrence: number = 0;
  hoursDiffrence: number = 0;
  minutesDiffrence: number = 0;

  targetDate: Date = new Date();
  dateNow: Date;
  
  difference: number = 0;

  months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor() {
    this.dateNow = new Date();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.account)
    {
      this.setTarget();
    }
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      if (!this.targetDate) {
        return;
      }

      this.difference = this.targetDate.getTime() - this.dateNow.getTime();
    }, 1000);
  }

  setTarget(): void
  {
    this.targetDate.setDate(this.dateNow.getDate() + this.account!.banInDays);
    this.targetDate.setHours(this.dateNow.getHours() + this.account!.banInHours);
    this.targetDate.setMinutes(this.dateNow.getMinutes() + this.account!.banInMinutes);
  }

  getDateDisplay(): string {
    let days = this.daysDiffrence.toString().padStart(2, '0');
    let hours = this.hoursDiffrence.toString().padStart(2, '0');
    let minutes = this.minutesDiffrence.toString().padStart(2, '0');

    return `${this.daysDiffrence}d ${this.hoursDiffrence}h ${this.minutesDiffrence}m `;
  }

  tickTock(): void {
    if(this.difference > 0) {
      this.dateNow = new Date();

      this.daysDiffrence = Math.floor(this.difference / (1000 * 60 * 60 * 24));
      this.hoursDiffrence = Math.floor((this.difference / (1000 * 60 * 60)) % 24);
      this.minutesDiffrence = Math.floor((this.difference / (1000 * 60)) % 60);
    }
  }
}
