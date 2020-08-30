import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDatePicker';
  roomsFilter: any = {};

  @ViewChild('myDatepicker', {static: false}) datePicker;

  printDate() {
    console.log('date picker --> ' + this.datePicker._selected);
  }

  public onChange(event: any): void {
    console.log(event);
    // this.getData(newDate);
  }
}
