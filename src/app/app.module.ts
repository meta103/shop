import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickModule } from 'ngx-slick';
import { DirectivesModule } from './core/directive/directives.module';
import { AgmCoreModule } from '@agm/core';
/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Service */
import { ChkService } from './service/chk.service';

/* components */
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { MenuItems } from './core/menu/menu-items/menu-items';
import { MenuToggleModule } from './core/menu-toggle.module';
import { PageTitleService } from './core/page-title/page-title.service';
import { WidgetsModule } from './widgets/widgets.module';
import { AboutComponent } from './about/about.component';
import { faqComponent } from './faq/faq.component';
import { Footer2Component } from './footer2/footer2.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      HomeComponent,
      ContactComponent,
      FooterComponent,
      HeaderComponent,
      MenuComponent,
      AboutComponent,
      faqComponent,
      Footer2Component,
   ],
   imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebaseConfig, 'misfavoritosde'),
      AngularFireDatabaseModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      WidgetsModule,
      MenuToggleModule,
      DirectivesModule,
      SlickModule.forRoot(),
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'
      })
   ],
   providers: [
      MenuItems,
      PageTitleService,
      ChkService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
