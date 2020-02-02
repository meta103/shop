import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Injectable()
export class EventLoggerService {

  constructor(public analytics: AngularFireAnalytics) { }

  logEvent() {
    this.analytics.logEvent('goal_completion', {
      name: 'linnk-to-amazon'
    })
  }
}
