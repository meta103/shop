import { Injectable } from '@angular/core';
/* import { AngularFireAnalytics } from '@angular/fire/analytics'; */

import * as firebase from 'firebase/app';
@Injectable()
export class EventLoggerService {

  constructor() { }

  logEvent() {
    firebase.analytics().logEvent('page_view', {
      page_path: 'linnk-to-amazon'
    })
  }
}
