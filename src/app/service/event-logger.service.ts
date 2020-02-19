import { Injectable } from '@angular/core';
/* import { AngularFireAnalytics } from '@angular/fire/analytics'; */

import * as firebase from 'firebase/app';
import 'firebase/analytics';
@Injectable()
export class EventLoggerService {

  constructor() { }

  logEvent(page: string) {
    firebase.analytics().logEvent('page_view', {
      page_path: page
    });
  }
}
