import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/jsonServices.service';
import { Notification } from '../../shared/notification';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';
@Component({
  selector: 'app-notification',
  templateUrl: 'notification.html',
  styleUrls: ['./notification.css']
})
export class NotificationComponent implements OnInit {
    notification: any;

  constructor(private _jsonService: JsonService) {
    this._jsonService.getNotification().subscribe(
      (notification: Notification[]) => {
        this.notification = notification;
        console.log(this.notification);
      });

   }

  ngOnInit() {

  }

}
