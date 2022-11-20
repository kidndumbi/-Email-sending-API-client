import { EmailTemplateModel } from './models/emailTemplate.model';
import { EmailTemplateService } from './services/email-template.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  emailTemplates: EmailTemplateModel[] = [];

  constructor(
    private emailTemplateservice: EmailTemplateService,
    private notifier: NotifierService
  ) {
    this.emailTemplateservice.getTemplates().catch((err) => {
      if (err instanceof HttpErrorResponse) {
        this.notifier.notify('error', 'Error retrieving data from service');
      } else {
        this.notifier.notify('error', 'Somethng went wrong');
      }
    });
  }

  ngOnInit(): void {
    this.emailTemplateservice.templateList$.subscribe((templates) => {
      this.emailTemplates = templates;
    });
  }

  onUpdateTemplate(templateData: EmailTemplateModel) {
    this.emailTemplateservice
      .updateTemplate(templateData)
      .then(() =>
        this.notifier.notify('success', 'Template updated successfully')
      )
      .catch((err) => this.notifier.notify('error', 'Error updating template'));
  }

  onCreateTemplate(templateData: EmailTemplateModel) {
    this.emailTemplateservice
      .createTemplate(templateData)
      .then(() =>
        this.notifier.notify('success', 'Template created successfully')
      )
      .catch((err) => this.notifier.notify('error', 'Error Creating template'));
  }

  onDeleteTemplate(_id: string) {
    this.emailTemplateservice
      .deleteTemplate(_id)
      .then(() =>
        this.notifier.notify('success', 'Template deleted successfully')
      )
      .catch((err) => this.notifier.notify('error', 'Error deleting template'));
  }
}
