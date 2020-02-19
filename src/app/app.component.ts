import { Component, AfterViewInit } from '@angular/core';
import { EventLoggerService } from './service/event-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor(private analytics: EventLoggerService){};

  ngAfterViewInit() {
    this.analytics.logEvent('home');
  }
}
