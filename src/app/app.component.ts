import { Component, AfterViewInit } from '@angular/core';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  ngAfterViewInit() {
    firebase.analytics().logEvent('eventname', {
      'firstTimeUser': true,
      'username': 'test'
    })
  }
}
