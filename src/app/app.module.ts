import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailTemplateComponent } from './components/email-template/email-template.component';
import { TemplateListComponent } from './components/template-list/template-list.component';
import { TemplateListItemComponent } from './components/template-list/template-list-item/template-list-item.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailTemplateComponent,
    TemplateListComponent,
    TemplateListItemComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NotifierModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
