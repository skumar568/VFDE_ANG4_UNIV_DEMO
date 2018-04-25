import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Notification } from './data/notification';
import { NOTIFICATIONS } from './data/mock-notifications';

@Injectable()
export class NotificationService {

  constructor() { }

  getNotifications(): Observable<Notification[]> {
    console.log('in notificationService: ',NOTIFICATIONS);
    return of(NOTIFICATIONS);
  }

}
