import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';

import { Notification } from '../../data/notification';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: 'notification.html',
  styleUrls: ['./notification.css']
})
export class NotificationComponent implements OnInit {
    notifications: Notification[];    

    constructor(private notificationService: NotificationService) { }

    ngOnInit() { 
      this.getNotifications();
    }

    getNotifications():void {
      this.notificationService.getNotifications().subscribe(notifications => this.notifications = notifications);
      console.log(this.notifications);
    }

}
