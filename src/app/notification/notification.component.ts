import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template:  `<div class="alert alert-success" [hidden]="displayNotification">
    <div class="close"><button class="btn" (click)="closeNotification()">x</button></div>
    <p>this site use cookie to provide better experience </p>
    </div>`,
    styles:["p{font-size:14px;}",".close{float:right;margin-top:-15px}"]
})
export class NotificationComponent {
  displayNotification:boolean=false;
  closeNotification(){
this.displayNotification=true;
  }
}
