import { EmailTemplateModel } from './models/emailTemplate.model';
import { EmailTemplateService } from './services/email-template.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  emailTemplates: EmailTemplateModel[] = [];

  constructor(private emailTemplateservice: EmailTemplateService) {
    this.emailTemplateservice.getTemplates();
  }

  ngOnInit(): void {
    this.emailTemplateservice.templateList$.subscribe((templates) => {
      this.emailTemplates = templates;
    });
  }
}
